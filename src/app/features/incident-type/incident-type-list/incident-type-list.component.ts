import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { LaraResource } from 'src/app/shared/models/lara-resource.model';
import { IncidentTypeEditComponent } from '../incident-type-edit/incident-type-edit.component';
import { IncidentType } from '../incident-type.model';
import { IncidentTypeService } from '../service/incident-type.service';

@Component({
  selector: 'app-incident-type-list',
  templateUrl: './incident-type-list.component.html',
  styleUrls: ['./incident-type-list.component.scss'],
})
export class IncidentTypeComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<IncidentType>;
  dataSource: MatTableDataSource<IncidentType>;
  res: LaraResource<IncidentType[]>;
  isLoading: boolean;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['description', 'delete'];

  constructor(
    private svc: IncidentTypeService,
    private snack: MatSnackBar,
    public dialog: MatDialog
  ) {}

  getIncidentTypes(page: number = 1) {
    this.isLoading = true;
    this.res = null;
    this.svc.getIncidentTypes().subscribe((res) => {
      this.res = res;
      this.dataSource.data = res.data;
      this.isLoading = false;
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<IncidentType>();
    this.getIncidentTypes();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  unsetIncidentType(id: number) {
    this.isLoading = true;
    this.svc.unsetIncidentType(id).subscribe(
      (res) => {
        this.snack.open('Cadastro removido com êxito', 'Dispensar', {
          duration: 3000,
          panelClass: ['mat-toolbar', 'mat-accent'],
        });

        this.getIncidentTypes(this.res.meta.current_page);
      },
      (err) =>
        this.snack.open(err.message, 'Dispensar', {
          duration: 3000,
          panelClass: ['mat-toolbar', 'mat-warn'],
        }),
      () => (this.isLoading = true)
    );
  }
  
  openDialog(id?: number): void {
    this.isLoading = true;

    const showDialog = (incidentType: IncidentType) => {
      this.isLoading = false;

      const dialogRef = this.dialog.open(IncidentTypeEditComponent, {
        width: '100%',
        data: incidentType,
      });
  
      dialogRef.afterClosed().subscribe(
        result => {
          if (!result) return;

          let msg, theme;
          
          if (result instanceof Error) {
            msg = result.message;
            theme = 'mat-warn';
          } else {
            msg = result;
            theme = 'mat-accent';
          }
          
          this.snack.open(msg, 'Dispensar', {
            duration: 3000,
            panelClass: ['mat-toolbar', theme],
          });

          this.getIncidentTypes(this.res.meta.current_page);
        }
      );
    }

    if (id) this.svc.getIncidentType(id).subscribe(
      res => showDialog(res.data)
    );
    else showDialog(new IncidentType());
  }
}

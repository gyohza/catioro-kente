import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LaraResource } from 'src/app/shared/models/lara-resource.model';
import { IncidentEditComponent } from '../incident-edit/incident-edit.component';
import { Incident } from '../incident.model';
import { IncidentService } from '../service/incident.service';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss'],
})
export class IncidentListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<Incident>;
  dataSource: MatTableDataSource<Incident>;
  res: LaraResource<Incident[]>;
  isLoading: boolean;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'incident_type',
    'location',
    'delete',
  ];

  constructor(
    private svc: IncidentService,
    private snack: MatSnackBar,
    public dialog: MatDialog,
  ) {}

  getIncidents(page: number = 1) {
    this.isLoading = true;
    this.res = null;
    this.svc.getIncidents({ page }).subscribe(res => {
      this.res = res;
      this.dataSource.data = res.data.map(
        v => Object.assign(new Incident(), v)
      );
      this.isLoading = false;
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Incident>();
    this.getIncidents();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  unsetIncident(id: number) {
    this.isLoading = true;
    this.svc.unsetIncident(id).subscribe(
      res => {
        this.snack.open('Cadastro removido com êxito', 'Dispensar', {
          duration: 3000,
          panelClass: ['mat-toolbar', 'mat-accent'],
        });
        
        this.getIncidents(this.res.meta.current_page);
      },
      err => this.snack.open(err.message, 'Dispensar', {
        duration: 3000,
        panelClass: ['mat-toolbar', 'mat-warn'],
      }),
      () => this.isLoading = true
    );
  }

  openDialog(id?: number): void {
    this.isLoading = true;

    const showDialog = (incident: Incident) => {
      this.isLoading = false;

      const dialogRef = this.dialog.open(IncidentEditComponent, {
        width: '100%',
        data: incident,
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

          this.getIncidents(this.res.meta.current_page);
        }
      );
    }

    if (id) this.svc.getIncident(id).subscribe(
      res => showDialog(res.data)
    );
    else showDialog(new Incident());
  }
}

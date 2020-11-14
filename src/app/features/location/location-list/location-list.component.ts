import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { LaraResource } from 'src/app/shared/models/lara-resource.model';
import { LocationEditComponent } from '../location-edit/location-edit.component';
import { Location } from '../location.model';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<Location>;
  dataSource: MatTableDataSource<Location>;
  res: LaraResource<Location[]>;
  isLoading: boolean;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['description', 'zipcode', 'delete'];

  constructor(
    private svc: LocationService,
    private snack: MatSnackBar,
    public dialog: MatDialog
  ) {}

  getLocations(page: number = 1) {
    this.isLoading = true;
    this.res = null;
    this.svc.getLocations({ page }).subscribe((res) => {
      this.res = res;
      this.dataSource.data = res.data;
      this.isLoading = false;
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Location>();
    this.getLocations();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  unsetLocation(id: number) {
    this.isLoading = true;
    this.svc.unsetLocation(id).subscribe(
      res => {
        this.snack.open('Cadastro removido com êxito', 'Dispensar', {
          duration: 3000,
          panelClass: ['mat-toolbar', 'mat-accent'],
        });
        
        this.getLocations(this.res.meta.current_page);
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

    const showDialog = (location: Location) => {
      this.isLoading = false;

      const dialogRef = this.dialog.open(LocationEditComponent, {
        width: '100%',
        data: location,
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

          this.getLocations(this.res.meta.current_page);
        }
      );
    }

    if (id) this.svc.getLocation(id).subscribe(
      res => showDialog(res.data)
    );
    else showDialog(new Location());
  }
}

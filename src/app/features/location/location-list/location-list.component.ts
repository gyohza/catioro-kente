import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { LaraResource } from 'src/app/shared/models/lara-resource.model';
import { Location } from '../location.model';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Location>;
  dataSource: MatTableDataSource<Location>;
  res: LaraResource<Location>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'description', 'zipcode', 'latitude', 'longitude'];

  constructor(private svc: LocationService) {}

  getLocations(page: number = 1) {
    this.res = null;
    this.svc.getLocations({page}).subscribe((res) => {
      this.res = res;
      this.dataSource.data = res.data;
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Location>();
    this.getLocations();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

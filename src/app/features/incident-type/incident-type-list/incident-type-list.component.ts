import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { LaraResource } from 'src/app/shared/models/lara-resource.model';
import { IncidentType } from '../incident-type.model';
import { IncidentTypeService } from '../service/incident-type.service';

@Component({
  selector: 'app-incident-type-list',
  templateUrl: './incident-type-list.component.html',
  styleUrls: ['./incident-type-list.component.scss']
})
export class IncidentTypeComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<IncidentType>;
  dataSource: MatTableDataSource<IncidentType>;
  res: LaraResource<IncidentType>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'description'];

  constructor(private svc: IncidentTypeService) {}

  getIncidentTypes(page: number = 1) {
    this.res = null;
    this.svc.getIncidentTypes().subscribe(
      res => {
        this.res = res;
        this.dataSource.data = res.data;
      },
    );
  }
  
  ngOnInit() {
    this.dataSource = new MatTableDataSource<IncidentType>();
    this.getIncidentTypes();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

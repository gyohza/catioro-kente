import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { IncidentType } from '../incident-type.model';
import { IncidentTypeService } from '../service/incident-type.service';

@Component({
  selector: 'app-incident-type',
  templateUrl: './incident-type.component.html',
  styleUrls: ['./incident-type.component.scss']
})
export class IncidentTypeComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<IncidentType>;
  dataSource: MatTableDataSource<IncidentType>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'description'];

  constructor(private svc: IncidentTypeService) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<IncidentType>()
    this.svc.getIncidentTypes().subscribe(
      res => {
        console.log(res);
        this.dataSource.data = res.data;
      },
    );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

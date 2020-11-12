import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { LaraResource } from 'src/app/shared/models/lara-resource.model';
import { Incident } from '../incident.model';
import { IncidentService } from '../service/incident.service';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss'],
})
export class IncidentListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Incident>;
  dataSource: MatTableDataSource<Incident>;
  res: LaraResource<Incident>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'incident_type',
    'location',
    'severity',
    'occurrence_date',
  ];

  constructor(private svc: IncidentService) {}

  getIncidents(page: number = 1) {
    this.res = null;
    this.svc.getIncidents({page}).subscribe(res => {
      this.res = res; console.log(res);
      this.dataSource.data = res.data.map(
        v => Object.assign(new Incident(), v)
      );
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Incident>();
    this.getIncidents();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

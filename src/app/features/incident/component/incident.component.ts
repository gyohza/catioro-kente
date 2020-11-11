import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Incident } from '../incident.model';
import { IncidentService } from '../service/incident.service';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss'],
})
export class IncidentComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Incident>;
  dataSource: MatTableDataSource<Incident>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'incident_type',
    'description',
    'location',
    'severity',
    'occurrence_date',
  ];

  constructor(private svc: IncidentService) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Incident>();
    this.svc.getIncidents().subscribe((res) => {
      console.log(res);
      this.dataSource.data = res.data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

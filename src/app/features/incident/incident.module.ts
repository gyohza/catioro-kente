import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { IncidentService } from './service/incident.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    IncidentListComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([
      { path: 'incidents', component: IncidentListComponent },
    ])
  ],
  providers: [
    IncidentService,
  ],
})
export class IncidentModule { }

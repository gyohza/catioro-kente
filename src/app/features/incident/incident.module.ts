import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentComponent } from './component/incident.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { IncidentService } from './service/incident.service';



@NgModule({
  declarations: [
    IncidentComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forChild([
      { path: 'incidents', component: IncidentComponent },
    ])
  ],
  providers: [
    IncidentService,
  ],
})
export class IncidentModule { }

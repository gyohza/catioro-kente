import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentTypeComponent } from './incident-type-list/incident-type-list.component';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IncidentTypeService } from './service/incident-type.service';



@NgModule({
  declarations: [
    IncidentTypeComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([
      { path: 'incident-types', component: IncidentTypeComponent },
    ]),
  ],
  providers: [
    IncidentTypeService,
  ],
})
export class IncidentTypeModule { }

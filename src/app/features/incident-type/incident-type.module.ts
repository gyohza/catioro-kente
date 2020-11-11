import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentTypeComponent } from './component/incident-type.component';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
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
    RouterModule.forChild([
      { path: 'incident-types', component: IncidentTypeComponent },
    ]),
  ],
  providers: [
    IncidentTypeService,
  ],
})
export class IncidentTypeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { LocationComponent } from './component/location.component';
import { LocationService } from './service/location.service';



@NgModule({
  declarations: [
    LocationComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forChild([
      { path: 'locations', component: LocationComponent },
    ]),
  ],
  providers: [
    LocationService,
  ],
})
export class LocationModule { }

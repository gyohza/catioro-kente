import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMapComponent } from './home-map/home-map.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    HomeMapComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: HomeMapComponent },
    ]),
    AgmCoreModule.forRoot({
      apiKey: environment.mapsApiKey
    }),
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    HomeMapComponent,
  ]
})
export class HomeModule { }

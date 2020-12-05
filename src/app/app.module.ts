import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IncidentTypeModule } from './features/incident-type/incident-type.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './core/interceptors/api.interceptor';
import { NavModule } from './core/layout/nav/nav.module';
import { LocationModule } from './features/location/location.module';
import { IncidentModule } from './features/incident/incident.module';
import { HomeModule } from './features/home/home.module';
import { OcsardpEditComponent } from './features/o-cara-subiu-a-rua-de-pe/ocsardp-edit/ocsardp-edit.component';
import { OCaraSubiuARuaDePeModule } from './features/o-cara-subiu-a-rua-de-pe/o-cara-subiu-a-rua-de-pe.module';

@NgModule({
  declarations: [
    AppComponent,
    OcsardpEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    NavModule,
    IncidentTypeModule,
    LocationModule,
    IncidentModule,
    OCaraSubiuARuaDePeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

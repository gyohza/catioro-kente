import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LaraResource } from 'src/app/shared/models/lara-resource.model';
import { Incident } from '../incident.model';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private http: HttpClient) { }

  getIncidents(params: object = {}): Observable<LaraResource<Incident>> {
    return this.http.get<LaraResource<Incident>>(
      `incidents?${new URLSearchParams(Object.entries(params))}`
    );
  }
}

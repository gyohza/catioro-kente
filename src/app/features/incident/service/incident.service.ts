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

  getIncidents(params: object = {}): Observable<LaraResource<Incident[]>> {
    return this.http.get<LaraResource<Incident[]>>(
      `incidents?${new URLSearchParams(Object.entries(params))}`
    );
  }

  getIncident(id: number): Observable<LaraResource<Incident>> {
    return this.http.get<LaraResource<Incident>>(
      `incidents/${id}`
    );
  }

  setIncident(params: object = {}): Observable<LaraResource<Incident>> {
    return this.http.post<LaraResource<Incident>>(
      `incidents`, params
    );
  }

  resetIncident(id: number, params: object = {}): Observable<LaraResource<Incident>> {
    return this.http.put<LaraResource<Incident>>(
      `incidents/${id}`, params
    );
  }

  unsetIncident(id: number): Observable<LaraResource<Incident>> {
    return this.http.delete<LaraResource<Incident>>(
      `incidents/${id}`
    );
  }
}

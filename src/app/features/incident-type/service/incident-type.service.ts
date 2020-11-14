import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LaraResource } from 'src/app/shared/models/lara-resource.model';
import { IncidentType } from '../incident-type.model';

@Injectable({
  providedIn: 'root'
})
export class IncidentTypeService {

  constructor(private http: HttpClient) { }

  getIncidentTypes(params: object = {}): Observable<LaraResource<IncidentType[]>> {
    return this.http.get<LaraResource<IncidentType[]>>(
      `incident-types?${new URLSearchParams(Object.entries(params))}`
    );
  }

  getIncidentType(id: number): Observable<LaraResource<IncidentType>> {
    return this.http.get<LaraResource<IncidentType>>(
      `incident-types/${id}`
    );
  }

  setIncidentType(params: object = {}): Observable<LaraResource<IncidentType>> {
    return this.http.post<LaraResource<IncidentType>>(
      `incident-types`, params
    );
  }

  resetIncidentType(id: number, params: object = {}): Observable<LaraResource<IncidentType>> {
    return this.http.put<LaraResource<IncidentType>>(
      `incident-types/${id}`, params
    );
  }

  unsetIncidentType(id: number): Observable<LaraResource<IncidentType>> {
    return this.http.delete<LaraResource<IncidentType>>(
      `incident-types/${id}`
    );
  }
}

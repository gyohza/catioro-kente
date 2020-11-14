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
}

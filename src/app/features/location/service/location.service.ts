import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LaraResource } from 'src/app/shared/models/lara-resource.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocations(params: object = {}): Observable<any> {
    return this.http.get<LaraResource<Location>>(
      `locations?${new URLSearchParams(Object.entries(params))}`
    );
  }
}

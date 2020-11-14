import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LaraResource } from 'src/app/shared/models/lara-resource.model';
import { Location } from '../location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocations(params: object = {}): Observable<LaraResource<Location[]>> {
    return this.http.get<LaraResource<Location[]>>(
      `locations?${new URLSearchParams(Object.entries(params))}`
    );
  }

  getLocation(id: number): Observable<LaraResource<Location>> {
    return this.http.get<LaraResource<Location>>(
      `locations/${id}`
    );
  }

  setLocation(params: object = {}): Observable<LaraResource<Location>> {
    return this.http.post<LaraResource<Location>>(
      `locations`, params
    );
  }

  resetLocation(id: number, params: object = {}): Observable<LaraResource<Location>> {
    return this.http.put<LaraResource<Location>>(
      `locations/${id}`, params
    );
  }

  unsetLocation(id: number): Observable<LaraResource<Location>> {
    return this.http.delete<LaraResource<Location>>(
      `locations/${id}`
    );
  }
}

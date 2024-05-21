import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Department } from '../models/department.model';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private apiUrl = environment.apiUrl;
  constructor(private readonly httpClient: HttpClient) { }

  getAllDeparments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(`${this.apiUrl}/Department`);
  }

  getCitiesByDepartmentId(departmentId: number): Observable<City[]> {
    return this.httpClient.get<City[]>(`${this.apiUrl}/Department/${departmentId}/cities`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Attraction } from '../models/attraction.model';

@Injectable({
  providedIn: 'root'
})
export class TourguideService {

  private apiUrl = environment.apiUrl;
  constructor(private readonly httpClient: HttpClient) { }

  getAllTouristicAttractions(): Observable<Attraction[]> {
    return this.httpClient.get<Attraction[]>(`${this.apiUrl}/TouristicAttraction`);
  }

  getTouristicAttractionById(id: number): Observable<Attraction> {
    return this.httpClient.get<Attraction>(`${this.apiUrl}/TouristicAttraction/${id}`);
  }
}

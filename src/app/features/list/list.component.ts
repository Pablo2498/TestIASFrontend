import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Attraction } from 'src/app/shared/models/attraction.model';
import { City } from 'src/app/shared/models/city.model';
import { Department } from 'src/app/shared/models/department.model';
import { CitiesService } from 'src/app/shared/services/cities.service';
import { TourguideService } from 'src/app/shared/services/tourguide.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cities: City[] = [];
  departments: Department[] = [];
  attractions: Attraction[] = [];
  constructor(private readonly citiesService: CitiesService,
              private readonly tourGuide: TourguideService
  ) { }

  ngOnInit(): void {
    this.getAllDeparments();
    this.getAllCitiesByDepartmentId(9);
    this.getAllTouristicAttractions();
    this.getTouristicAttractionById(36);
  }

  public getAllDeparments() {
    this.citiesService.getAllDeparments().subscribe(res => this.departments = res);

  };

  public getAllCitiesByDepartmentId(id: number) {
    this.citiesService.getCitiesByDepartmentId(id).subscribe(res => this.cities = res);
  }

  public getAllTouristicAttractions() {
    this.tourGuide.getAllTouristicAttractions().subscribe(res => this.attractions = res);
  }

  public getTouristicAttractionById(id: number) {
    this.tourGuide.getTouristicAttractionById(id).subscribe(res => console.log(res));
  }

  public search($event: any) {
    const attractionId = $event.attraction;
    this.tourGuide.getTouristicAttractionById(attractionId).subscribe(res => this.attractions = [res]);
  }
}

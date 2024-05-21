import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Attraction } from 'src/app/shared/models/attraction.model';
import { City } from 'src/app/shared/models/city.model';
import { Department } from 'src/app/shared/models/department.model';
import { CitiesService } from 'src/app/shared/services/cities.service';
import { TourguideService } from 'src/app/shared/services/tourguide.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public searchForm!: FormGroup;
  public departments: Department[] = [];
  public cities: City[] = [];
  public attractions: Attraction[] = [];
  selectedCity!: number;
  selectedAttraction!: number;
  selectedDepartment!: number;
  @Output() search = new EventEmitter<any>();
  constructor(private readonly fb: FormBuilder,
              private readonly citiesService: CitiesService,
              private readonly tourGuide: TourguideService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      attraction: ['', Validators.required],
      department: ['', Validators.required],
      city: ['', Validators.required]
    });
    this.getAllDeparments();
  }

  public getAllDeparments() {
    this.citiesService.getAllDeparments().subscribe(res => this.departments = res);

  };

  searchAttraction() {
    this.search.emit({ department: this.selectedDepartment, city: this.selectedCity, attraction: this.selectedAttraction });
  }

  selectDepartment($event: any) {
    this.selectedDepartment = $event.value;
    this.citiesService.getCitiesByDepartmentId(this.selectedDepartment).subscribe(res => this.cities = res);
  }

  selectCity($event: any) {
    this.selectedCity = $event.value;
    console.log(this.selectedCity);
    let attractions: Attraction[] = [];
    this.tourGuide.getAllTouristicAttractions().subscribe(res => {
      attractions = res;
      this.attractions = attractions.filter(x => x.cityId === this.selectedCity);
    });
  }

  selectAttraction($event: any) {
    this.selectedAttraction = $event.value;
  }

}

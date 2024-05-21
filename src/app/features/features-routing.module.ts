import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingRoutingModule } from './features-routing-routing.module';
import { ListComponent } from './list/list.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { CardTitlePipe } from '../pipes/card-title.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterComponent } from './filter/filter.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [ListComponent, FilterComponent, CardTitlePipe],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    FeaturesRoutingRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class FeaturesRoutingModule { }

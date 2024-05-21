import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './features/filter/filter.component';
import { ListComponent } from './features/list/list.component';
import { CardComponent } from './features/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesRoutingModule } from './features/features-routing.module';
import { CardTitlePipe } from './pipes/card-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeaturesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

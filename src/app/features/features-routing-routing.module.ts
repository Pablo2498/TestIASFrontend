import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FeaturesRoutingModule } from './features-routing.module';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingRoutingModule { }

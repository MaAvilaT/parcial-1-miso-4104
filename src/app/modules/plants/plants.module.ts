import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlantsComponent } from './list-plants/list-plants.component';
import { PlantsRoutingModule } from "./plants-routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    ListPlantsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PlantsRoutingModule,
  ]
})
export class PlantsModule { }

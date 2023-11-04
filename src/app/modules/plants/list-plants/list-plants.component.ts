import { Component, OnInit } from '@angular/core';
import { PlantsService } from "../../../services/plants.service";
import { Plant } from "../../../models/plant.model";

@Component({
  selector: 'app-list-plants',
  templateUrl: './list-plants.component.html',
  styleUrls: ['./list-plants.component.css']
})
export class ListPlantsComponent implements OnInit {

  plants: Plant[] = []
  interiorPlants: number = 0;
  exteriorPlants: number = 0;

  constructor(private service: PlantsService) {
    this.service.getPlants()
      .subscribe((plants: Plant[]) => {
        this.plants = plants;

        let interiorPlants: number = 0;
        let exteriorPlants: number = 0;
        for (const plant of plants) {
          if (plant.tipo === 'Interior') {
            interiorPlants++;
          } else if (plant.tipo === 'Exterior') { // there could be more types?
            exteriorPlants++;
          }
        }

        this.interiorPlants = interiorPlants;
        this.exteriorPlants = exteriorPlants;
      })
  }

  ngOnInit(): void {
  }

}

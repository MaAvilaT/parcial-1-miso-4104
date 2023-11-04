import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Plant } from "../models/plant.model";

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private client: HttpClient) { }

  getPlants(): Observable<Plant[]> {
    return this.client.get<Plant[]>('https://gist.githubusercontent.com/josejbocanegra/7b71922ee9e2ab407d3210f1e5cb8400/raw/cf1077fa69112bc67ff520dd6517a93afd3dae29/202212_MISW4104_Grupo2.json');
  }

}

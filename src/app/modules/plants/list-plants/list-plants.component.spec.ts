import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlantsComponent } from './list-plants.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClientModule } from "@angular/common/http";
import { PlantsService } from "../../../services/plants.service";

describe('ListPlantsComponent', () => {
  let component: ListPlantsComponent;
  let fixture: ComponentFixture<ListPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPlantsComponent],
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [PlantsService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlantsComponent);
    component = fixture.componentInstance;

    component.plants = [
      {
        "id": 3,
        "nombre_comun": "Espatifilo",
        "nombre_cientifico": "Spathiphyllum Wallasii",
        "tipo": "Interior",
        "altura_maxima": 65,
        "clima": "Templado, cálido",
        "sustrato_siembra": "Tierra orgánica"
      },
      {
        "id": 4,
        "nombre_comun": "Tronco de Brasil",
        "nombre_cientifico": "Dracaena fragrans Massangeana",
        "tipo": "Interior",
        "altura_maxima": 20,
        "clima": "Templado, cálido",
        "sustrato_siembra": "Tierra orgánica con buen drenaje, arena, cascarilla de arroz"
      },
      {
        "id": 5,
        "nombre_comun": "Palma de cartón",
        "nombre_cientifico": "Zamiloculcas zamiifolia",
        "tipo": "Interior",
        "altura_maxima": 100,
        "clima": "Templado",
        "sustrato_siembra": "Sustrato especial para plantas de interior"
      }
    ]

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 rows', () => {
    expect(component.plants);
    expect(component.plants.length).toEqual(3);

    const compiled: HTMLElement = fixture.nativeElement as HTMLElement;
    let actual: Element | null = compiled.querySelector(`#plants-table`);
    let plantsTable: NodeListOf<ChildNode> | undefined = actual?.childNodes;

    let totalTableRows: number = 0;

    // There was an issue with a comment detected as a node,
    // so I had to check if the node type was COMMENT_NODE
    // to count the items.
    plantsTable?.forEach((tableSection: ChildNode): void => {
      tableSection.childNodes.forEach((row: ChildNode): void => {
        if (row.nodeType !== Node.COMMENT_NODE) {
          totalTableRows++;
        }
      });
    });

    expect(totalTableRows).toEqual(4);
  });

});

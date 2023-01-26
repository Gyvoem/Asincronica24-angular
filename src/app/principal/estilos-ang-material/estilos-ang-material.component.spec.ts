import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstilosAngMaterialComponent } from './estilos-ang-material.component';

describe('EstilosAngMaterialComponent', () => {
  let component: EstilosAngMaterialComponent;
  let fixture: ComponentFixture<EstilosAngMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstilosAngMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstilosAngMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

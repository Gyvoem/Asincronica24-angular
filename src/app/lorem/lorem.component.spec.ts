import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremComponent } from './lorem.component';

describe('LoremComponent', () => {
  let component: LoremComponent;
  let fixture: ComponentFixture<LoremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoremComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

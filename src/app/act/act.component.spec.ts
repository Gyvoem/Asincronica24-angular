import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActComponent } from './act.component';

describe('ActComponent', () => {
  let component: ActComponent;
  let fixture: ComponentFixture<ActComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

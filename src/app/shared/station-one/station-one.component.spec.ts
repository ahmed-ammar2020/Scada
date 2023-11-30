import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationOneComponent } from './station-one.component';

describe('StationOneComponent', () => {
  let component: StationOneComponent;
  let fixture: ComponentFixture<StationOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StationOneComponent]
    });
    fixture = TestBed.createComponent(StationOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationTwoComponent } from './station-two.component';

describe('StationTwoComponent', () => {
  let component: StationTwoComponent;
  let fixture: ComponentFixture<StationTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StationTwoComponent]
    });
    fixture = TestBed.createComponent(StationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

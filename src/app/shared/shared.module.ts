import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationOneComponent } from './station-one/station-one.component';
import { StationTwoComponent } from './station-two/station-two.component';
import { TowerComponent } from './tower/tower.component';

@NgModule({
  declarations: [StationOneComponent, StationTwoComponent, TowerComponent],
  imports: [CommonModule],
  exports: [TowerComponent, StationOneComponent, StationTwoComponent],
})
export class SharedModule {}

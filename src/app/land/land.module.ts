import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandRoutingModule } from './land-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LandHomeComponent } from './land-home/land-home.component';

@NgModule({
  declarations: [LandHomeComponent],
  imports: [CommonModule, LandRoutingModule, SharedModule],
})
export class LandModule {}

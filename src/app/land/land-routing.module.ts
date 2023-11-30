import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandHomeComponent } from './land-home/land-home.component';

const routes: Routes = [
  {
    path: '',
    component: LandHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandRoutingModule {}

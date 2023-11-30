import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'land',
    pathMatch: 'full',
  },
  {
    path: 'land',
    loadChildren: () => import('./land/land.module').then((m) => m.LandModule),
  },
  {
    path: 'area',
    loadChildren: () => import('./area/area.module').then((m) => m.AreaModule),
  },
  {
    path: 'plot',
    loadChildren: () => import('./plot/plot.module').then((m) => m.PlotModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

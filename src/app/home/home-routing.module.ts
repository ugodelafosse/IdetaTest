import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'buildings',
    //     pathMatch: 'full',
    //   },
    //   { path: 'details', loadChildren: () => import('./data/data-main.module').then(m => m.DataMainModule) },
    //   {
    //     path: 'buildings',
    //     loadChildren: () => import('./building-pages/building-pages.module').then(m => m.BuildingPagesModule),
    //   },
    //   {
    //     path: 'building/:id',
    //     loadChildren: () => import('./instance-pages/instance-pages.module').then(m => m.InstancePagesModule),
    //   },
    //   {
    //     path: 'products',
    //     loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
  static components = [HomeComponent];
}

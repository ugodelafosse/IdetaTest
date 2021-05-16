import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoCustomComponent } from './logo-custom.component';

const routes: Routes = [
  {
    path: '',
    component: LogoCustomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoCustomRoutingModule {
  static components = [LogoCustomComponent];
}

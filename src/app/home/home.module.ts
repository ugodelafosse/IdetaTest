import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [HomeRoutingModule, CommonModule],
  declarations: [HomeRoutingModule.components],
})
export class HomeModule {}

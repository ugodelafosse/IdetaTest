import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  imports: [HomeRoutingModule, CommonModule, CarouselModule],
  declarations: [HomeRoutingModule.components],
})
export class HomeModule {}

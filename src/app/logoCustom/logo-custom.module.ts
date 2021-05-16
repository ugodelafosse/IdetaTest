import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoCustomRoutingModule } from './logo-custom-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  imports: [LogoCustomRoutingModule, CommonModule, CarouselModule],
  declarations: [LogoCustomRoutingModule.components],
})
export class LogoCustomModule {}

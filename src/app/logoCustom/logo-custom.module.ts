import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoCustomRoutingModule } from './logo-custom-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CustomLogoBarService } from '../services/customLogoBar.service';

@NgModule({
  imports: [LogoCustomRoutingModule, CommonModule, CarouselModule],
  providers: [CustomLogoBarService],
  declarations: [LogoCustomRoutingModule.components],
})
export class LogoCustomModule {}

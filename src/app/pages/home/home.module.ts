import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TodaysDealComponent } from '../todays-deal/todays-deal.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from '../categories/categories.component';
@NgModule({
  declarations: [HomeComponent, TodaysDealComponent, CarouselComponent, CategoriesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule, NgbModule
  ]
})
export class HomeModule { }

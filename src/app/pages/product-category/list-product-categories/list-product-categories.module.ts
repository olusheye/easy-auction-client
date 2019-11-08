import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ListProductCategoriesComponent } from './list-product-categories.component';
import { ListProductCategoriesRoutingRoutes } from './list-product-categories.routing.module';

@NgModule({
  imports: [CommonModule, ListProductCategoriesRoutingRoutes, ReactiveFormsModule],
  declarations: [ListProductCategoriesComponent]
})
export class ListProductCategoriesModule { }

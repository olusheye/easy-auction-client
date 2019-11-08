import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ListProductsComponent } from './list-products.component';
import { ListProductsRoutingRoutes } from './list-product.routing.module';

@NgModule({
  imports: [CommonModule, ListProductsRoutingRoutes, ReactiveFormsModule],
  declarations: [ListProductsComponent]
})
export class ListProductsModule { }

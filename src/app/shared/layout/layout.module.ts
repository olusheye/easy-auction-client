import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRouting } from './layout-routing.module';
import { SharedModule } from '../shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from 'src/app/pages/products/product-details/product-details.component';
import { AdminLayoutModule } from '../admin-layout/admin-layout.module';
// import { AddProductsComponent } from 'src/app/pages/products/add-product/add-product.component';

@NgModule({
  imports: [CommonModule, LayoutRouting, SharedModule, ReactiveFormsModule],
  declarations: [LayoutComponent, ProductDetailsComponent]
})
export class LayoutModule { }

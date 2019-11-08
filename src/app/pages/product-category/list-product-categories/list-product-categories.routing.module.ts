import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductCategoriesComponent } from './list-product-categories.component';

const routes: Routes = [
  {
    path: '',
    component: ListProductCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListProductCategoriesRoutingRoutes {}

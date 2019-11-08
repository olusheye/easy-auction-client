import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [{
  path: '', component: AdminLayoutComponent, children: [
    // { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
    {
      path: 'dashboard',
      loadChildren: () =>
        import('../../pages/admin-dashboard/admin-dashboard.module').then(
          m => m.AdminDashboardModule
        )
    },
    {
      path: 'products',
      loadChildren: () =>
        import('../../pages/products/list-products/list-product.module').then(
          m => m.ListProductsModule
        )
    },
    {
      path: 'product-categories',
      loadChildren: () =>
        import('../../pages/product-category/list-product-categories/list-product-categories.module').then(
          m => m.ListProductCategoriesModule
        )
    },

    { path: '**', redirectTo: 'dashboard', pathMatch: 'prefix' },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }

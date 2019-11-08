import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { ProductDetailsComponent } from 'src/app/pages/products/product-details/product-details.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('../../pages/home/home.module').then(
            m => m.HomeModule
          )
      },
      {
        path: 'customer-care', loadChildren: () =>
          import('../../pages/customer-care/customer-care.module').then(
            m => m.CustomerCareModule
          ), canActivate: [AuthGuard],
      },
      {
        path: 'product-details/:productId', component: ProductDetailsComponent
      },
      {
        path: 'product-search/productName/:productId/categoryId/:categoryId',
        loadChildren: () =>
          import('../../pages/products/search/search.module').then(
            m => m.SearchModule
          )
      },
      {
        path: '/admin',
        loadChildren: () =>
          import('../../shared/admin-layout/admin-layout.module').then(
            m => m.AdminLayoutModule
          )
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRouting { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/layout/layout.module')
      .then(m => m.LayoutModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./shared/acount-layout/acount-layout.module')
      .then(m => m.AcountLayoutModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./shared/admin-layout/admin-layout.module')
      .then(m => m.AdminLayoutModule)
  },
  { path: 'pages/products/search', loadChildren: () => import('./pages/products/search/search.module').then(m => m.SearchModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcountLayoutComponent } from './acount-layout.component';
const routes: Routes = [
  {
    path: '',
    component: AcountLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'prefix' },
      {
        path: 'signin',
        loadChildren: () =>
          import('../../pages/account/signin/signin.module').then(
            m => m.SigninModule
          )
      },
      {
        path: 'signup',
        loadChildren: () =>
          import('../../pages/account/signup/signup.module').then(
            m => m.SignupModule
          )
      },
      {
        path: 'customercare',
        loadChildren: () =>
          import('../../pages/customer-care/customer-care.module').then(m => m.CustomerCareModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcountLayoutRoutingModule { }

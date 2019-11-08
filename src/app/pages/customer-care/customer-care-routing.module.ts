import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerCareComponent } from './customer-care.component';

const routes: Routes = [{ path: '', component: CustomerCareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerCareRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcountLayoutRoutingModule } from './acount-layout-routing.module';
import { AcountLayoutComponent } from './acount-layout.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [AcountLayoutComponent],
  imports: [
    CommonModule,
    AcountLayoutRoutingModule,
    SharedModule
  ]
})
export class AcountLayoutModule { }

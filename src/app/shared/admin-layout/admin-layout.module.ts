import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [CommonModule, NgbModule, AdminLayoutRoutingModule, SharedModule, ReactiveFormsModule],
  declarations: [AdminLayoutComponent]
})
export class AdminLayoutModule { }

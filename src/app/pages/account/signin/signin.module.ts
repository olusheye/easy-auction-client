import { SigninRoutingRoutes } from './signin.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SigninRoutingRoutes, ReactiveFormsModule],
  declarations: [SigninComponent]
})
export class SigninModule { }

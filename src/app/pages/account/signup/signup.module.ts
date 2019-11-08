import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupRoutingRoutes } from './signup.routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SignupRoutingRoutes, ReactiveFormsModule],
  declarations: [SignupComponent]
})
export class SignupModule { }

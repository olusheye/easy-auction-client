import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { HeaderFilterComponent } from './header-filter/header-filter.component';
import { HeaderLoginComponent } from './header-login/header-login.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  declarations: [FooterComponent, NavBarComponent, HeaderFilterComponent, HeaderLoginComponent],
  exports: [FooterComponent, NavBarComponent, HeaderFilterComponent, HeaderLoginComponent]
})
export class SharedModule { }

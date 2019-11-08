import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppErrorHandler } from './common/errors/app-error-handler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// used to create fake backend
// import { fakeBackendProvider } from './_helpers/fake-backend';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AlertComponent } from './_components/alert/alert.component';

@NgModule({
  declarations: [AppComponent, AlertComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true,
    },
    // {provide: ErrorHandler, useClass: AppErrorHandler},
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }

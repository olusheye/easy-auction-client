import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // this.authenticationService.logout();
        // location.reload(true);
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
    // return next.handle(request).pipe(tap(() => { },
    //   (err: any) => {

    //     if (err instanceof HttpErrorResponse) {
    //     alert(err);

    //       // if (err.status !== 401) {
    //       //   return;
    //       // }
    //       // this.router.navigate(['account/login']);
    //     }
    //   }));
  }
}

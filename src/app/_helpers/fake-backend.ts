// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { Observable, of, throwError } from 'rxjs';
// import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
// import { Product } from '../models/product';

// // array in local storage for registered users
// let users = JSON.parse(localStorage.getItem('users')) || [];
// const products = JSON.parse(localStorage.getItem('products')) || [];


// @Injectable()
// export class FakeBackendInterceptor implements HttpInterceptor {
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const { url, method, headers, body } = request;

//     // wrap in delayed observable to simulate server api call
//     return of(null)
//       .pipe(mergeMap(handleRoute))
//       .pipe(materialize()) // call materialize
//       // and dematerialize to ensure delay even
//       // if an error is thrown(https://github.com/Reactive-Extensions/RxJS/issues/648)
//       .pipe(delay(500))
//       .pipe(dematerialize());

//     function handleRoute() {
//       seedProduct();
//       switch (true) {
//         case url.endsWith('/users/register') && method === 'POST':
//           return register();
//         case url.endsWith('/users/authenticate') && method === 'POST':
//           return authenticate();
//         case url.endsWith('/users') && method === 'GET':
//           return getUsers();
//         case url.match(/\/users\/\d+$/) && method === 'GET':
//           return getUserById();
//         case url.match(/\/product\/\d+$/) && method === 'GET':
//           return getProductById();
//         case url.match(/\/users\/\d+$/) && method === 'DELETE':
//           return deleteUser();
//         default:
//           // pass through any requests not handled above
//           return next.handle(request);
//       }
//     }

//     // route functions

//     function register() {
//       const user = body;
//       if (users.find((x: { username: any; }) => x.username === user.username)) {
//         return error('Username "' + user.username + '" is already taken');
//       }

//       user.id = users.length ? Math.max(...users.map((x: { id: any; }) => x.id)) + 1 : 1;
//       users.push(user);
//       localStorage.setItem('users', JSON.stringify(users));

//       return ok();
//     }
//     function seedProduct() {
//       // const product = body;
//       const product = {
//         _id: 1, productName: 'Nixon Wristwatch',
//         imgUrl: 'assets/img/pic04.jpg',
//         bidEndTime: new Date('1/4/2015'),
//         currentBid: 1000,
//         description: 'Nixon wristwatch',
//         priceRangeMax: 5000,
//         priceRangeMin: 3000,
//         title: 'Nixon watch'
//       };

//       if (products.find((x) => x.productId === product._id)) {
//         return error('Product "' + product._id + '" is added');
//       }

//       product._id = products.length ? Math.max(...products.map((x: { id: any; }) => x.id)) + 1 : 1;
//       products.push(product);
//       localStorage.setItem('products', JSON.stringify(products));

//       return ok();
//     }
//     function authenticate() {
//       const { username, password } = body;
//       const user = users.find((x: { username: any; password: any; }) => x.username === username && x.password === password);
//       if (!user) { return error('Username or password is incorrect'); }
//       return ok({
//         id: user.id,
//         username: user.username,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         token: 'fake-jwt-token'
//       });
//     }

//     function getUsers() {
//       // if (!isLoggedIn()) { return unauthorized(); }
//       return ok(users);
//     }

//     function getUserById() {
//       if (!isLoggedIn()) { return unauthorized(); }

//       const user = users.find((x: { id: number; }) => x.id == idFromUrl());
//       return ok(user);
//     }

//     function getProductById() {
//       // if (!isLoggedIn()) { return unauthorized(); }
//       const product = products.find((x) => x.productId === idFromUrl());
//       return ok(product);
//     }
//     function deleteUser() {
//       if (!isLoggedIn()) { return unauthorized(); }

//       users = users.filter((x: { id: number; }) => x.id !== idFromUrl());
//       localStorage.setItem('users', JSON.stringify(users));
//       return ok();
//     }

//     // helper functions

//     function ok(body?: { id: any; username: any; firstName: any; lastName: any; token: string; }) {
//       return of(new HttpResponse({ status: 200, body }));
//     }

//     function unauthorized() {
//       return throwError({ status: 401, error: { message: 'Unauthorised' } });
//     }

//     function error(message: string) {
//       return throwError({ error: { message } });
//     }

//     function isLoggedIn() {
//       return headers.get('Authorization') === 'Bearer fake-jwt-token';
//     }

//     function idFromUrl() {
//       const urlParts = url.split('/');
//       return parseInt(urlParts[urlParts.length - 1]);
//     }
//   }
// }

// export const fakeBackendProvider = {
//   // use fake backend in place of Http service for backend-less development
//   provide: HTTP_INTERCEPTORS,
//   useClass: FakeBackendInterceptor,
//   multi: true
// };

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent implements OnInit {
  @Output() currentUserSubject: BehaviorSubject<User>;
  isUserAuthenticated: boolean;
  currentUser: Observable<User>;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.isUserAuthenticated = this.authenticationService.currentUserValue != null;
    this.currentUser = this.authenticationService.currentUser;
  }

  onLogOff() {
    // remove user from local storage to log user out
    this.authenticationService.logout();
    this.router.navigate(['account/signin']);

  }
}

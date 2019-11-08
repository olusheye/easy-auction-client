import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navbarOpen = false;
  currentUser: Observable<User>;
  isLoggedIn = false;
  constructor(private authService: AuthenticationService) {

  }
  ngOnInit() {
    this.currentUser = this.authService.currentUser;
    // this.authService.currentUser.subscribe(x => {
    //   this.isLoggedIn = x !== null;

    // });
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  // handleLogOff(event: Observable<User>) {
  //   event.subscribe(data => {
  //     this.isLoggedIn = data == null;

  //   });
  //   //console.log(event);
  // }

}

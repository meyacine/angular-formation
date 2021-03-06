import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  login(): void {
    this.userService.login()
      .subscribe(() => {
        console.warn('the server should answer me');
        this.router.navigate(['']);
      });
  }

  adminLogin(): void {
    this.userService.adminLogin()
      .subscribe(() => {
        console.warn('the server should answer me');
        this.router.navigate(['']);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { logWarnings } from 'protractor/built/driverProviders';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
  
@Component({ selector: 'mat-spinner' })  
  
export class LoginFormComponent implements OnInit {

  username: string;
  password: string;
  error: string;
  constructor(private router: Router, public session: SessionService) { }

  ngOnInit() {
  }

  login() {
    
    this.session.login(this.username, this.password)
      .catch(e => this.error = e)
      .subscribe(user => {
        console.log(`Welcome ${user.username}`)
        this.router.navigate(['user/home'])
      });
  }

  signup() {
    this.session.signup(this.username, this.password)
      .catch(e => this.error = e)
      .subscribe( home=> {
        this.router.navigate(['user/home'])
      });
  }

  logout() {
    let username = this.session.user.username;
    this.session.logout()
      .catch(e => this.error = e)
      .subscribe(user => console.log(`Hope to see you soon ${username}!`));
  }

}


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
  email: string;

  constructor(private router: Router, public session: SessionService) { }

  ngOnInit() {

  }
  toggleSignup() {
    document.getElementById("login-toggle").style.backgroundColor = "#fff";
    document.getElementById("login-toggle").style.color = "#222";
    document.getElementById("signup-toggle").style.backgroundColor = "#57b846";
    document.getElementById("signup-toggle").style.color = "#fff";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
  }

  toggleLogin() {
    document.getElementById("login-toggle").style.backgroundColor = "#57B846";
    document.getElementById("login-toggle").style.color = "#fff";
    document.getElementById("signup-toggle").style.backgroundColor = "#fff";
    document.getElementById("signup-toggle").style.color = "#222";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  }
  login() {

    this.session.login(this.username, this.password)
      .catch(e => this.error = e)
      .subscribe(user => {
        console.log(`Welcome ${user.username}`)
        
      });
  }

  signup(email, username, password) {

    this.username = username;
    this.email = email;
    this.password = password;

    this.session.signup(this.email, this.username, this.password)
      .catch(e => this.error = e)
      .subscribe(home => {
      });
  }

  logout() {
    let username = this.session.user.username;
    this.session.logout()
      .catch(e => this.error = e)
      .subscribe(user => console.log(`Hope to see you soon ${username}!`));
  }

}


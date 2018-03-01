import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public router: Router, public session: SessionService) { }

  ngOnInit() {
  }
  logout() {
    let username = this.session.user.username;
    this.session.logout()
      .subscribe(user => {
        console.log(`Hope to see you soon ${username}!`)
        this.router.navigate(['user/home'])

      });
  }
}

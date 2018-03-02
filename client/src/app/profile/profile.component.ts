import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router'
import { EditUserService } from '../../services/edit-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usernameId: any;
  constructor(public router: Router, public session: SessionService, public edit: EditUserService) {
    
    this.edit.getInfo()
      .subscribe(res => {
        console.log(res.user)
        this.usernameId = res.user
    })
   }

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

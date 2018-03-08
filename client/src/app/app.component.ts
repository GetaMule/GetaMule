import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { EditUserService } from '../services/edit-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GetaMule';
  usernameId: any;
  constructor(public router: Router, public session: SessionService, public edit: EditUserService) {
    
    this.edit.getInfo()
      .subscribe(res => {
        console.log(res.user)
        this.usernameId = res.user
    })
   }
}

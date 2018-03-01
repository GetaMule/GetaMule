import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public session:SessionService) { }
  // searchInput: any = 
  
  ngOnInit() {
  }

  logout(){
    let username = this.session.user.username;
    this.session.logout()
    .subscribe(user => console.log(`Hope to see you soon ${username}!`));
  }

}


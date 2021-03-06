import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { EditUserService } from '../../services/edit-user.service';


@Component({
  selector: 'app-mytravels',
  templateUrl: './mytravels.component.html',
  styleUrls: ['./mytravels.component.css']
})
export class MytravelsComponent implements OnInit {

  usernameId: any;
  constructor(public router: Router, public session: SessionService, public edit: EditUserService) {
   
    this.edit.getInfo()
      .subscribe(res => {
        this.usernameId = res.user
      })
  }

  ngOnInit() {
  }
  deleteTravel(id) {
    this.edit.remove(id).subscribe(m => {
      this.router.navigate(['mytravels']);
    });
  }

}

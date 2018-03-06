import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { EditUserService } from '../../services/edit-user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  usernameId: any;

  constructor(public router: Router, public session: SessionService, public edit: EditUserService) {

    this.edit.getInfo()
      .subscribe(res => {
        this.usernameId = res.user
      })
  }
  ngOnInit() {
  }
  deleteOrder(id) {
    this.edit.deleteOrder(id).subscribe(m => {
      this.router.navigate(['/profile']);
    });
  }
}

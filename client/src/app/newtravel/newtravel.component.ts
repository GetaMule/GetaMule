import { Component, OnInit } from '@angular/core';
import { EditUserService } from '../../services/edit-user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newtravel',
  templateUrl: './newtravel.component.html',
  styleUrls: ['./newtravel.component.css']
})
export class NewtravelComponent implements OnInit {
  myTravels = {}
  user_id: any
  constructor(
    public editar: EditUserService,
    private router: Router,
    private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.route.params.subscribe(body => {
        console.log("impresion body")
        console.log(body)
        this.user_id = body.id

      })
    });
  }
  add(myTravels) {
    console.log(this.user_id)
    this.editar.addTravel(myTravels, this.user_id)
      .subscribe(user => {
        console.log(user)
        this.router.navigate(['mytravels'])
      });
  }
}

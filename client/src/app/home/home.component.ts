import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { SubmitProdService } from '../../services/submit-prod.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  values: String;
  error: String

  constructor(private router: Router,public session: SessionService, public submit: SubmitProdService) { }

  ngOnInit() {

  }

  logout() {
    let username = this.session.user.username;
    this.session.logout()
      .subscribe(user => {
        console.log(`Hope to see you soon !`)
        this.router.navigate(['user/home'])
      });
  }
  submitProduct() {
   
    this.submit.submit(this.values)
      .catch(e => this.error = e)
      .subscribe(res => console.log("product submited" + res));
  }
  searchProduct() {
    this.submit.search()
      .catch(e => this.error = e)
      .subscribe(res => console.log("product searched" + res));
  
  }
}


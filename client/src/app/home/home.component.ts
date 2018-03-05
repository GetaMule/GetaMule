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
  myDate :Date;
  values: String;
  error: String
  p: any = [];
  picker: any;
  image: any = 'http://via.placeholder.com/100x100'
  constructor(private router: Router, public session: SessionService, public submit: SubmitProdService) { }

  ngOnInit() {
  }

  submitDate(myDate) {
    console.log(myDate)
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
      .subscribe(res => {
        console.log("Product submited" + res)
        
      }
      );
  }
  searchProduct() {
    this.submit.search()
      .catch(e => this.error = e)
      .subscribe(res => {//products[0].offers
        
         this.image = res.products[0].image_url

        res = res.products[0].offers
        console.log(res)
        this.p = [];
        res.forEach(p => {
          this.p.push(p);
          console.log(JSON.stringify(p.shop_name) + JSON.stringify(p.price));
        })

      });

  }
}


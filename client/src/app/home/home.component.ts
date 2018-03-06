import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { SubmitProdService } from '../../services/submit-prod.service';
import { Router, ActivatedRoute } from '@angular/router'
import { EditUserService } from '../../services/edit-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myDate: Date;
  values: String;
  country: String
  error: String
  p: any = [];

  item: any;
  usernameId: any
  picker: any;
  image: any = 'http://via.placeholder.com/100x100'
  user_id: any;
  users: any=[];
  constructor(
    public editar: EditUserService,
    private router: Router,
    private route: ActivatedRoute, public session: SessionService, public submit: SubmitProdService) {
      this.editar.getInfo()
      .subscribe(res => {
        this.usernameId = res.user
        
      })
    }
    
    ngOnInit() {
      this.getCountries();
      
    }
        getCountries() {
          return this.submit.getCountries().subscribe(res => {
            console.log("hola")
            res = JSON.parse(res._body)
            res.user.forEach(element => {
              this.users.push(element)
              console.log('(.)(.)')
             
              
            });
            //console.log(JSON.parse(res._body))
           // this.users = JSON.parse(res._body).user[0].originCountry;
           console.log(this.users)
          });
        }
  submitDate(myDate) {
    console.log(myDate)
  }
  logout() {
    let username = this.session.user.username;
    this.session.logout()
      .subscribe(user => {
        console.log(`Hope to see you soon !`)
        this.router.navigate(['/'])
      });
  }
  submitProduct() {

    this.submit.submit(this.values, this.country)
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
        this.p = [];
        res.forEach(p => {
          this.p.push(p);
          console.log(JSON.stringify(p.shop_name) + JSON.stringify(p.price) + JSON.stringify(p.currency));

        })
        console.log(this.p);
      });

  }

  order(item, myDate) {
    this.myDate = myDate;
    this.item = item;
    console.log("=============================")
    this.submit.submitOrder(this.item, this.myDate).subscribe((res) => {
      console.log("entro a la funcion submit de order en component")
      console.log(res)
      this.router.navigate(['/orders'])
    });
  }

}

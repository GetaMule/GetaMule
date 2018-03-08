import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../services/session.service";
import { SubmitProdService } from "../../services/submit-prod.service";
import { ActivatedRoute, Router } from "@angular/router";
import { EditUserService } from '../../services/edit-user.service'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  texto: string
  usermail: any
  subject: string
  text: string
  html: string
  values: string
  country: string
  emails: any = [];
  all: any;
  ab: any = [];
  constructor(public submit: SubmitProdService, public customerService: SubmitProdService,
    public userService: EditUserService,
    private router: Router,
    private route: ActivatedRoute,
    public session: SessionService) { }
  ngOnInit() {
    this.getMails();
  }
  
  getMails() {
    this.submit.getCountries
    this.userService.getInfo().subscribe(p => {
      this.country = p.user.originCountry;
    });
    this.customerService.getCountries().subscribe(m => {
      this.emails.push(m._body);
      // console.log("this are the user emails");
      // console.log(m._body.user.email)
      // this.emails = m.user.email;
      this.all = JSON.parse(this.emails[0]).user;
      this.all.forEach(m => {
        if (m.originCountry !== this.country) this.ab.push(m.email);
      })
    })

  }

  sendEmail(){
    console.log('entro en el componente')
    this.usermail = this.ab;
    console.log(this.ab)
    this.customerService.sendEmail(this.ab, this.subject, this.text, this.html).subscribe(res => {
      console.log('Sent!')
      this.router.navigate(['customer'])
    });
  }
}
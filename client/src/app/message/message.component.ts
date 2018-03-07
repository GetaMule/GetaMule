import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../services/session.service";
import { SubmitProdService } from "../../services/submit-prod.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  texto: string = 'Hola soy Sebas, quiero venderte un producto'
  usermail: string
  subject: string
  text: string
  html: string
  constructor(public customerService: SubmitProdService,
    private router: Router,
    private route: ActivatedRoute,
    public session: SessionService) { }
  ngOnInit() {
  }
  sendEmail(){
    console.log('entro en el componente')
    console.log(this.usermail)
    this.customerService.sendEmail(this.usermail, this.subject, this.text, this.html).subscribe(res => {
      console.log('Sent!');
      this.router.navigate(['customer'])
    });
  }
}
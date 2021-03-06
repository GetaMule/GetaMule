import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../environments/environment';
const BASEURL: string = environment.BASE_URL;

@Injectable()
export class SubmitProdService {
  BASEURL: string = environment.BASE_URL;
  options: object = { withCredentials: true };

  constructor(private http: Http) { }
  users: Array<string>;


  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }

  getCountries(): Observable<any>  {
    return this.http.get(`${this.BASEURL}/api/user/getCountries`)
  }

  submit(values: String, country: String): Observable<any> {
    console.log(values)
    return this.http.post(`${this.BASEURL}/getProduct`, { values, country }, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }
  search(): Observable<any> {
    return this.http.get(`${this.BASEURL}/getProduct`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  submitOrder(item, myDate,tel): Observable<any> {
    console.log("entra al servicio")
    console.log(myDate, item)
    return this.http.put(`${this.BASEURL}/pushOrder`, { item, myDate,tel }, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  sendEmail(mailoptions, mailsubject, mailtext, mailhtml){
    console.log(mailoptions)
    return this.http.post(`${this.BASEURL}/messages/message`, {mailoptions, mailsubject, mailtext, mailhtml}, this.options)
      .map(res => res.json());
  }
}

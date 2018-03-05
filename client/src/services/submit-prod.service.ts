import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SubmitProdService {
  BASEURL: string = "http://localhost:3000"
  options: object = { withCredentials: true };

  constructor(private http: Http) { }



  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }



  submit(values: String): Observable<any> {
    console.log(values)
    return this.http.post(`${this.BASEURL}/getProduct`, { values }, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }
  search(): Observable<any> {
    return this.http.get(`${this.BASEURL}/getProduct`,this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  submitOrder(object: Object, myDate: Date): Observable<any> {
    return this.http.post(`${this.BASEURL}/pushOrder`, { object, myDate }, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }
}

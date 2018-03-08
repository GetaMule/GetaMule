import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../environments/environment';
const  BASEURL:string= environment.BASE_URL;


export interface User {
  username: String,
  password: String,
  originCountry: String,
  role: String,
  email: String
}

@Injectable()
export class EditUserService {

  BASEURL: string = environment.BASE_URL;
  options: object = { withCredentials: true };
  constructor(private http: Http) { }
  private user: User



  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }



  getInfo(): Observable<any> {
    return this.http.get(`${this.BASEURL}/api/user/`, this.options)
      .map((res) => res.json())
      .catch(this.handleError)


  }
  edit(user, userid): Observable<any> {
    return this.http.put(`${this.BASEURL}/api/user/edit/${userid}`, { user }, this.options)
      .map((res) => res.json())
      .catch(this.handleError)
  }

  addTravel(myTravels, userid): Observable<any> {
    return this.http.put(`${this.BASEURL}/api/user/new/${userid}`, { myTravels }, this.options)
      .map((res) => res.json())
      .catch(this.handleError)
  }
  remove(id): Observable<any> {
    return this.http.get(`${this.BASEURL}/api/user/delete-travel/${id}`)
      .map((res) => res.json());
  }
  addOrder(product, myDate, userid): Observable<any> {
    console.log("desde el service")
    console.log(userid)
    return this.http.post(`${this.BASEURL}/api/user/add/order/${userid}`, { product, myDate }, this.options)
      .map((res) => res.json())
      .catch(this.handleError)

  }
  deleteOrder(id): Observable<any> {
    return this.http.get(`${this.BASEURL}/delete-order/${id}`)
      .map((res) => res.json());
  }
}




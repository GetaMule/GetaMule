import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


export interface User {
  username: String,
  password: String,
  originCountry: String,
  role: String,
}

@Injectable()
export class EditUserService {

  BASEURL: string = "http://localhost:3000"
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
}




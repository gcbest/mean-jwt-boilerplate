import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: Http) {}

  // const headers = new Headers();
  // headers.append('Content-Type', 'application/json; charset=utf-8');

  onSubmit(user) {
    console.log(user);
    this.http.post('/signup', user)
      .subscribe(
        () => {console.log('user created')},
        err => console.error(err)
      )
  }

  ngOnInit() {}

}

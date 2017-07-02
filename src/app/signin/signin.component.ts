import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private http: Http) { }

  onSubmit(user) {
    console.log(user);
    this.http.post('/signin', user)
      .subscribe(
        () => {console.log('user created')},
        err => console.error(err)
      );
  }

  ngOnInit() {
  }

}

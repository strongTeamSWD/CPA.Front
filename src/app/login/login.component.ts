import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

}

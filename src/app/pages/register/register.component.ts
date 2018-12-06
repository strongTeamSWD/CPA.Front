import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    selected = new FormControl(0);

    ngOnInit() {
        //       this.buildForm();
          }

}

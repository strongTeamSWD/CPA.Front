import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
    userForm: FormGroup;
    formErrors = {
        'email': '',
        'password': ''
    };
    validationMessages = {
        'email': {
            'required': 'Please enter your email',
            'email': 'Please enter your vaild email'
        },
        'password': {
            'required': 'please enter your password',
            'pattern': 'The password must contain numbers and letters',
            'minlength': 'Please enter more than 4 characters',
            'maxlength': 'Please enter less than 25 characters',
        }
    };
    constructor(private router: Router,
                private fb: FormBuilder) { }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.userForm = this.fb.group({
            'email': ['', [
                Validators.required,
                Validators.email
            ]
            ],
            'password': ['', [
                Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                Validators.minLength(6),
                Validators.maxLength(25)
            ]
            ],
        });

        this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged();
    }

    onValueChanged(data?: any) {
        if (!this.userForm) {
          return;
        }
        const form = this.userForm;
        for (const field in this.formErrors) {
          if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
              const messages = this.validationMessages[field];
              for (const key in control.errors) {
                if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                  this.formErrors[field] += messages[key] + ' ';
                  break;
                }
              }
            }
          }
        }
    }
    login() {
        this.router.navigate(['/']);
    }

}

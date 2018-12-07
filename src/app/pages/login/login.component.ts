import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// import { AuthService } from '../../core/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../services/authService';
import {AuthDetail} from '../../models/AuthDetail';
import {UserDetail} from '../../models/UserDetail';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  formErrors = {
    'email': '',
    'password': '',
  };
  validationMessages = {
    'email': {
      'required': 'Please enter your email',
      'email'   : 'please enter your vaild email'
    },
    'password': {
      'wrong'    : 'wrong email or password',
      'required' : 'please enter your password',
      'pattern'  : 'The password must contain numbers and letters',
      'minlength': 'Please enter more than 4 characters',
      'maxlength': 'Please enter less than 25 characters',
    }
  };

  constructor(private router: Router,
              private fb: FormBuilder,
              private authService : AuthService,
              private route: ActivatedRoute
  ) {
  }

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
            }
          }
        }
       }
     }
  }
  login() {
    let user = new AuthDetail();
    console.log(this.userForm);
        user.login = this.userForm.value.email;
        user.password    = this.userForm.value.password;


     this.authService.login(user).subscribe(res=>{

     });
      //.toPromise().then(res => {
    //   console.log(res);
    //   if(res.body)
    //   {
    //     this.authService.currentUser = res.body as UserDetail;
    //     this.router.navigate(['/']);
    //   }
    //   else
    //       this.formErrors['password'] = this.validationMessages['password']['wrong'];
    // }).catch(
    //     err=>{
    //       console.error(err);
    //     }
    // );
  }
}


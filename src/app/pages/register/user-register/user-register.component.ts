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
        'password': '',
        'password2': '',
        'name': '',
        'surname': '',
        'company': '',
        'phone': '',
        'site': '',
        'country': ''
    };
    validationMessages = {
        'email': {
            'required': 'Please enter your email',
            'email': 'Please enter your vaild email'
        },
        'password': {
            'required': 'Please enter your password',
            'pattern': 'The password must contain numbers and letters',
            'minlength': 'Please enter more than 6 characters',
            'maxlength': 'Please enter less than 25 characters',
        },
        'password2': {
            'required': 'Value must be equal to password',
        },
        'name':{
            'required': 'Please enter your Name',
            'pattern': 'The Name must contain just letters',
            'minlength': 'Please enter more than 2 characters',
            'maxlength': 'Please enter less than 25 characters',
        },
        'surname':{
            'required': 'Please enter your Surname',
            'pattern': 'The Name must contain just letters',
            'minlength': 'Please enter more than 2 characters',
            'maxlength': 'Please enter less than 25 characters',
        },
        'company':{
            'required': 'Please enter your Company name',
            'minlength': 'Please enter more than 2 characters',
            'maxlength': 'Please enter less than 25 characters',
        },
        'phone':{
            'required': 'Please enter your Phone',
            'pattern': 'The Phone must contain numbers',
            'minlength': 'Please enter more than 2 characters',
            'maxlength': 'Please enter less than 25 characters',
        },
        'site':{
            'required': 'Please enter your Site',
        },
        'country':{
            'required': 'Please enter your Site',
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
                Validators.required,
                Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                Validators.minLength(6),
                Validators.maxLength(25)
            ]
            ],
            'password2': ['', [
                Validators.required,
                // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                // // Validators.pattern('password')
                // Validators.minLength(6),
                // Validators.maxLength(25)
            ]
            ],
            'name': ['', [
                Validators.required,
                Validators.pattern('^[a-zA-Z]*[ -]*[a-zA-Z]*$'),
                Validators.minLength(2),
                Validators.maxLength(25)
            ]
            ],
            'surname': ['', [
                Validators.required,
                Validators.pattern('^[a-zA-Z]*[ -]*[a-zA-Z]*$'),
                Validators.minLength(2),
                Validators.maxLength(25)
            ]
            ],
            'company': ['', [
                Validators.required,
                Validators.pattern('^[a-zA-Z]*[ -]*[a-zA-Z]*$'),
                Validators.minLength(2),
                Validators.maxLength(25)
            ]
            ],
            'phone': ['', [
                Validators.required,
                Validators.pattern('^[+]*[0-9 -()]*[0-9 -]*[0-9]$'),
                Validators.minLength(2),
                Validators.maxLength(25)
            ]
            ],
            'site': ['', [
                Validators.required,
            ]
            ],
            'country': ['', [
                Validators.required,
            ]
            ],
        },{validator: this.checkIfMatchingPasswords('password', 'password2')});// PasswordValidator.areEqual(this.userForm));

        this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged();
    }
    checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
        const form = this.userForm;
        return (group: FormGroup) => {
            let passwordInput = group.controls[passwordKey],
                passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                this.formErrors['password2'] +=  'AAAAAAAAAAA';
                return passwordConfirmationInput.setErrors({notEquivalent: true});
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        }
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
    register() {

        //per


        this.router.navigate(['/']);
    }

}

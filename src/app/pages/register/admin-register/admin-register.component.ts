import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, NgForm, FormGroupDirective} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})
export class AdminRegisterComponent implements OnInit {

    userForm: FormGroup;
    formErrors = {
        'email': '',
        'password': '',
        'password2': ''
    };
    validationMessages = {
        'email': {
            'required': 'Please enter your email',
            'email': 'Please enter your vaild email'
        },
        'password': {
            'required': 'Please enter your password',
            'pattern': 'The password must contain numbers and letters',
            'minlength': 'Please enter more than 4 characters',
            'maxlength': 'Please enter less than 25 characters',
        },
        'password2': {
            'required': 'Value must be equal to password',
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
            'password2': ['', [
                Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                // Validators.pattern('password')
                Validators.minLength(6),
                Validators.maxLength(25)
            ]
            ],
        },{validator: this.checkIfMatchingPasswords('password', 'password2')});// PasswordValidator.areEqual(this.formGroup));

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
    login() {
        this.router.navigate(['/']);
    }

}


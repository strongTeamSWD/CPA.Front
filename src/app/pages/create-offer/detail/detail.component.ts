import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OfferService} from '../../../services/offerService';
import {Aim} from '../../../models/Aim';
import {GeoTarget} from '../../../models/GeoTarget';
import {Offer} from '../../../models/Offer';
import {Country} from '../../../models/Country';
import {City} from '../../../models/City';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl} from '@angular/forms';


@Component({
    selector: 'app-create-offer-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

    offer: Offer;
    step = 0;
    aims: Aim[] = [];
    geoTargetlist: GeoTarget[]= [];
    geoTargets: GeoTarget[]= [];
    startDate= new Date();
    finishDate= new Date();
    serializedFinishDate = new FormControl((new Date()).toISOString());
    serializedStartDate = new FormControl((new Date()).toISOString());
    formGroup: FormGroup;
    toppings = new FormControl();
    @Output() talk: EventEmitter<Offer> = new EventEmitter<Offer>();
    // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

    formErrors = {
        'name': '',
        'payment': '',
        'processingDays': '',
        'postclickDays': '',
        'acceptRate': '',
    };
    validationMessages = {
        'name': {
            'required': 'Please enter your name',
        },
        'payment': {
            'required': 'Please enter your name',
        },
        'processingDays': {
            'required': 'Please enter your processing days'
        },
        'postclickDays': {
            'required': 'Please enter your postclick days'
        },
        'acceptRate': {
            'required': 'Please enter your accept rate'
        },
    };
    onOut(){
        console.log("Value after losing focus  is",this.geoTargets);
    }

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
        if(this.step ==3){
            this.talkBack();
        }
    }

    nextStepAfterAdd() {
        this.addAim();
        this.step++;


    }

    prevStep() {
        this.step--;
    }

    constructor(public offerService: OfferService, private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
    }


    async setDisplayColumns() {
        this.geoTargetlist = this.offerService.loadAllGeoTargetList()
    }

    buildForm() {
        this.formGroup = this.fb.group({
            'name': ['', [
                Validators.required,
            ]
            ],
            'payment': ['', [
                Validators.required,
            ]
            ],
            'processingDays': ['', [
                Validators.required
            ]
            ],
            'postclickDays': ['', [
                Validators.required
            ]
            ],
            'acceptRate': ['', [
                Validators.required
            ]
            ],
        },);
        this.formGroup.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged();
    }

    onValueChanged(data?: any) {
        if (!this.formGroup) {
            return;
        }
        const form = this.formGroup;
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

    addAim() {
        if (this.formGroup.valid) {
            this.aims.push(new Aim(null, null, this.formGroup.getRawValue().name, this.formGroup.getRawValue().payment,
                this.formGroup.getRawValue().processingDays, this.formGroup.getRawValue().postClickDays, this.formGroup.getRawValue().acceptRate));
            this.formGroup.reset();
        }
    }

    talkBack() {
        console.log('child talk');
        // this.offer = new Offer(null, null, null, this.aims, this.geoTargets, null, null, true, this.startDate, this.finishDate);
        // console.log('Offer', this.offer);
        // this.talk.emit(this.offer);
    }
    ngOnInit() {
        this.setDisplayColumns();
        this.buildForm();

    }


}


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
        this.geoTargetlist.push(new GeoTarget(1, 1, 1, new Country(1, 'Kazakhsten'), new City(1, 'Almaty')))
        this.geoTargetlist.push(new GeoTarget(2, 1, 2, new Country(1, 'Kazakhsten'), new City(2, 'Astana')))
        this.geoTargetlist.push(new GeoTarget(3, 2, 3, new Country(2, 'Russsia'), new City(3, 'Moscow')))
        this.geoTargetlist.push(new GeoTarget(4, 2, 4, new Country(2, 'Russsia'), new City(4, 'Saint Petersburg')))
        this.geoTargetlist.push(new GeoTarget(5, 3, 5, new Country(3, 'Malaysia'), new City(5, 'Kuala Lumpur')))
        this.geoTargetlist.push(new GeoTarget(6, 4, 6, new Country(4, 'China'), new City(6, 'Shanghai')))
        this.geoTargetlist.push(new GeoTarget(7, 5, 7, new Country(5, 'Turkey'), new City(7, 'Istanbul')))
        this.geoTargetlist.push(new GeoTarget(8, 6, 8, new Country(6, 'India'), new City(8, 'Delhi')))
        this.geoTargetlist.push(new GeoTarget(9, 6, 9, new Country(6, 'India'), new City(9, 'Mumbai')))
        this.geoTargetlist.push(new GeoTarget(10, 7, 10, new Country(7, 'Japan'), new City(10, 'Tokyo')))
        this.geoTargetlist.push(new GeoTarget(11, 8, 11, new Country(8, 'South Korea'), new City(11, 'Seoul')))
        this.geoTargetlist.push(new GeoTarget(12, 9, 12, new Country(9, 'United Kingdom'), new City(12, 'London')))
        this.geoTargetlist.push(new GeoTarget(13, 10, 13, new Country(10, 'Argentina'), new City(13, 'Buenos Aires')))
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


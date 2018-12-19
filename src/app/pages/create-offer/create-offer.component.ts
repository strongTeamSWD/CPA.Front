import { Component, OnInit } from '@angular/core';
import {OfferService} from '../../services/offerService';
import {Aim} from '../../models/Aim';
import {GeoTarget} from '../../models/GeoTarget';
import {Offer} from '../../models/Offer';
import {Country} from '../../models/Country';
import {City} from '../../models/City';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'app-offer-details',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.scss'],
    // providers: [{
    //     provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
    // }]
})
export class CreateOfferComponent implements OnInit {

    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

  constructor(public offerService : OfferService, private activatedRoute : ActivatedRoute, private _formBuilder: FormBuilder) {
      }


    async setDisplayColumns(){
    }


  ngOnInit() {
      this.setDisplayColumns();
      this.firstFormGroup = this._formBuilder.group({
          firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
          secondCtrl: ['', Validators.required]
      });
  }

}


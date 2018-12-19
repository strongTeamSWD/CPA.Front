import {Component, OnInit, ViewChild} from '@angular/core';
import {OfferService} from '../../services/offerService';
import {Aim} from '../../models/Aim';
import {GeoTarget} from '../../models/GeoTarget';
import {Offer} from '../../models/Offer';
import {Country} from '../../models/Country';
import {City} from '../../models/City';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {DetailComponent} from './detail/detail.component';




@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.scss'],
    // providers: [{
    //     provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
    // }]
})
export class CreateOfferComponent implements OnInit {

    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    offer: Offer;
    name: string;
    minLevel: number;
    description: string;
    @ViewChild(DetailComponent ) detail: DetailComponent ;

    constructor(public offerService : OfferService, private activatedRoute : ActivatedRoute, private _formBuilder: FormBuilder,
                private router: Router) {
      }


    async setDisplayColumns(){
    }


    getDatail(){
        this.detail.talkBack();
    }

    talkBack(e: Offer) {
      // this.offer = e;

      console.log('Parent talk');
      // console.log('Offer', this.offer);

    }

    saveOffer(){
        this.offer = new Offer(this.offerService.index++, this.name, this.description, this.detail.aims, this.detail.geoTargets, null,
            this.minLevel, true, this.detail.startDate, this.detail.finishDate);

        this.offerService.createOffer(this.offer);
        this.router.navigate(['/']);

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


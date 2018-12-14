import { Component, OnInit } from '@angular/core';
import {OfferService} from '../../services/offerService';
import {Aim} from '../../models/Aim';
import {GeoTarget} from '../../models/GeoTarget';
import {Offer} from '../../models/Offer';
import {Country} from '../../models/Country';
import {City} from '../../models/City';



@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit {

  offer: Offer;
  id: number;
  displayedColumns: string[] = ['aim', 'payment', 'your_level', 'processing', 'postclick', 'accept_rate'];
  dataSource = ELEMENT_DATA;

  constructor(public offerService : OfferService) {
      }


  setDisplayColumns(){
      let aims = [new Aim(1, 1, 'one', 10, 30, 5, 1),
          new Aim(2, 1, 'one', 10, 30, 5, 1),];
      let geotarget = [new GeoTarget(1, 1, 1, new Country(1, 'Kazakhstan'), new City(1, 'Almaty')),
          new GeoTarget(2, 1, 2, new Country(1, 'Kazakhstan'), new City(2, 'Astana'))]
      this.offer = new Offer(1, 'one', 'first', aims, geotarget, 1, 1, true, new Date(), new Date());

      console.log('Offer', this.offer);
  }


  ngOnInit() {
    this.setDisplayColumns();
    this.offer = this.offerService.loadOfferById(this.id);

  }

}
export interface PeriodicElement {
    aim: string;
    payment: number;
    your_level: number;
    processing: number;
    postclick: number;
    accept_rate: Date
}

const ELEMENT_DATA: PeriodicElement[] = [
    {payment: 1, aim: 'Hydrogen', your_level: 1.5, processing: 45, postclick: 30, accept_rate: null},
];

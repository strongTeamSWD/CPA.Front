import { Component, OnInit } from '@angular/core';
import {OfferService} from '../../services/offerService';
import {Aim} from '../../models/Aim';
import {GeoTarget} from '../../models/GeoTarget';
import {Offer} from '../../models/Offer';
import {Country} from '../../models/Country';
import {City} from '../../models/City';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit {

  offer: Offer;
  id: number;
  displayedColumns: string[] = ['aim', 'payment', 'your_level', 'processing', 'postclick', 'accept_rate'];
  dataSource : PeriodicElement[] = [];

  constructor(public offerService : OfferService, private activatedRoute : ActivatedRoute) {
      }


    async setDisplayColumns(){
        this.id = await this.activatedRoute.snapshot.params['id'];

        this.offer = await this.offerService.loadOfferById(this.id);
      //   let aims = [new Aim(1, 1, 'one', 10, 30, 70, 1),
      //     new Aim(3, 1, 'two', 3, 30, 6, 3),
      //     new Aim(2, 1, 'third', 5, 15, 5, 1),
      // ];
      // let geotarget = [new GeoTarget(1, 1, 1, new Country(1, 'Kazakhstan'), new City(1, 'Almaty')),
      //     new GeoTarget(2, 1, 2, new Country(1, 'Kazakhstan'), new City(2, 'Astana'))]
      // this.offer = new Offer(1, 'one', 'first', aims, geotarget, 1, 1, true, new Date(), new Date());

      // this.dataSource = [{payment: 1, aim: 'Hydrogen', your_level: 1.5, processing: 45, postclick: 30, accept_rate: null},];

        console.log('this.offer.aims', this.offer.aims);
      for(let aim of this.offer.aims) {
          // this.dataSource.concat() += [{payment: 1, aim: 'Hydrogen', your_level: 1.5, processing: 45, postclick: 30, accept_rate: null}]
          let data =  {} as PeriodicElement;
          data.payment = aim.payment;
          data.aim = aim.name;
          data.accept_rate = aim.acceptRate;
          data.postclick = aim.postClickDays;
          data.processing = aim.processingDays;
          data.your_level = this.offer.lvelId;
          console.log('data: ', data);
          // var temp:PeriodicElement = {payment: 1, aim: 'Hydrogen', your_level: 1.5, processing: 45, postclick: 30, accept_rate: null};
          this.dataSource.push(data);
      }

      // this.dataSource = [{payment: 1, aim: 'Hydrogen', your_level: 1.5, processing: 45, postclick: 30, accept_rate: null},];

      // console.log('Offer', this.offer);
  }


  ngOnInit() {
      this.setDisplayColumns();
  }

}
export interface PeriodicElement {
    aim: string;
    payment: number;
    your_level: number;
    processing: number;
    postclick: number;
    accept_rate: number
}


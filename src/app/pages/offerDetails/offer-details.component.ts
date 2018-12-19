import { Component, OnInit } from '@angular/core';
import {OfferService} from '../../services/offerService';
import {Offer} from '../../models/Offer';
import {ActivatedRoute} from '@angular/router';
import {MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit {

  offer: Offer;
  id: number;
  displayedColumns: string[] = ['aim', 'payment', 'your_level', 'processing', 'postclick', 'accept_rate'];
    dataSource: MatTableDataSource<PeriodicElement>;
  constructor(public offerService : OfferService, private activatedRoute : ActivatedRoute) {
      }


    async setDisplayColumns(){
        this.id = await this.activatedRoute.snapshot.params['id'];

        this.offer = await this.offerService.loadOfferById(this.id);

        let res: PeriodicElement[] = [];
      for(let aim of this.offer.aims) {
          // this.dataSource.concat() += [{payment: 1, aim: 'Hydrogen', your_level: 1.5, processing: 45, postclick: 30, accept_rate: null}]
          // let data =  {} as PeriodicElement;
          let data:PeriodicElement = new PeriodicElement();
          data.payment = aim.payment;
          data.aim = aim.name;
          data.accept_rate = aim.acceptRate;
          data.postclick = aim.postClickDays;
          data.processing = aim.processingDays;
          data.your_level = this.offer.lvelId;
          res.push(data);
      }
        this.dataSource = new MatTableDataSource<PeriodicElement>(res);
  }


  ngOnInit() {
      this.setDisplayColumns();
  }

}
export class PeriodicElement {
    aim: string;
    payment: number;
    your_level: number;
    processing: number;
    postclick: number;
    accept_rate: number
}


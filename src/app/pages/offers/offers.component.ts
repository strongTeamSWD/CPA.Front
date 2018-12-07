import { Component, OnInit } from '@angular/core';
import {Offer} from '../../models/Offer';
import {OfferService} from '../../services/offerService';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  offerslist : Offer[] = [];

  constructor(offerService : OfferService) { }

  ngOnInit() {
  }

}

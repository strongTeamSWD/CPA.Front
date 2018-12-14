import { Component, OnInit } from '@angular/core';
import {OfferService} from '../../services/offerService';
import {Aim} from '../../models/Aim';
import {GeoTarget} from '../../models/GeoTarget';



@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  displayedColumns = [];

  constructor(public offerService : OfferService) {

  }


  setDisplayColumns(){

      this.displayedColumns = [
          { field: 'id', header: 'Vin' },
          { field: 'name', header: 'Year' },
          { field: 'description', header: 'Description' },
          { field: 'aims', header: 'Aims' },
          { field: 'levelId', header: 'Level Id' },
          { field: 'minLevel', header: 'Min Level' },
          { field: 'startDate', header: 'Start Date' },
          { field: 'accept_rate', header: 'accept rate' },
      ];
  }


  ngOnInit() {
    this.setDisplayColumns();
    this.offerService.loadAllOffers();
  }

}
import { Component, OnInit } from '@angular/core';
import {OfferService} from '../../services/offerService';
import {Aim} from '../../models/Aim';
import {GeoTarget} from '../../models/GeoTarget';



@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  displayedColumns = [];

  constructor(public offerService : OfferService) {

  }


  setDisplayColumns(){

      this.displayedColumns = [
          { field: 'Id', header: 'Vin' },
          { field: 'Name', header: 'Year' },
          { field: 'Description', header: 'Description' },
          { field: 'Aims', header: 'Aims' },
          { field: 'LevelId', header: 'Level Id' },
          { field: 'MinLevel', header: 'Min Level' },
          { field: 'startDate', header: 'Start Date' },
          { field: 'accept_rate', header: 'accept rate' },
      ];
  }


  ngOnInit() {
    this.setDisplayColumns();
    this.offerService.loadAllOffers();
  }

}

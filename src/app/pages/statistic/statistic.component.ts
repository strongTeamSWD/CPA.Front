import {Component, OnInit, ViewChild} from '@angular/core';
import {OfferService} from '../../services/offerService';
import {Aim} from '../../models/Aim';
import {GeoTarget} from '../../models/GeoTarget';
import {FormControl} from '@angular/forms';
import {OfferFilter} from '../../models/OfferFilter';
import {MatPaginator} from '@angular/material';



@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

    filter: OfferFilter = new OfferFilter();
    serializedFinishDate = new FormControl((new Date()).toISOString());
    serializedStartDate = new FormControl((new Date()).toISOString());
    geoTargetlist: GeoTarget[] = [];
    aimList: string[] = [];

    constructor(public offerService : OfferService) {
        this.filter.startDate = new Date();
        this.filter.finishDate = new Date();
        this.filter.geoTargets = [];
        this.filter.aimList = [];
    }


  setDisplayColumns(){
      this.offerService.loadAllOffers();
      this.geoTargetlist = this.offerService.loadAllGeoTargetList();
      this.aimList = this.offerService.loadAllAimList();
  }


  ngOnInit() {
    this.setDisplayColumns();
    this.offerService.loadAllOffers();
  }

    applyFilter(){
        // this.offerService.
    }

}

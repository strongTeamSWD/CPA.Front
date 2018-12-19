import {Component, OnInit, ViewChild} from '@angular/core';
import {OfferService} from '../../services/offerService';
import {Aim} from '../../models/Aim';
import {GeoTarget} from '../../models/GeoTarget';
import {FormControl} from '@angular/forms';
import {OfferFilter} from '../../models/OfferFilter';
import {MatPaginator} from '@angular/material';
import {ResponsiveTableHelpers} from './responsive-table/helpers.data';



@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

    filter: OfferFilter = new OfferFilter();
    serializedFinishDate = new FormControl((new Date()).toISOString());
    serializedStartDate = new FormControl((new Date()).toISOString());
    geoTargetlist: GeoTarget[]= [];

    displayedColumns = ['userId', 'userName', 'progress', 'color'];//['id', 'name', 'description', 'type', 'action'];
    rows: Array<any> = [];
    showResponsiveTableCode;

    @ViewChild(MatPaginator) paginator1: MatPaginator;
    pageLength = 0;
    pageSize = 15;
    helpers = ResponsiveTableHelpers;

    constructor(public offerService : OfferService) {
        this.filter.startDate = new Date();
        this.filter.finishDate = new Date();
        this.filter.geoTargets = [];
    }


  setDisplayColumns(){
      this.geoTargetlist = this.offerService.loadAllGeoTargetList()
  }


  ngOnInit() {
    this.setDisplayColumns();
    this.offerService.loadAllOffers();
  }

    applyFilter(){
        // this.offerService.
    }

}

import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {OfferService} from '../../services/offerService';
import {Aim} from '../../models/Aim';
import {GeoTarget} from '../../models/GeoTarget';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Offer} from '../../models/Offer';
import {AcceptOffer} from '../../models/AcceptOffer';



@Component({
  selector: 'app-accept-offers',
  templateUrl: './accept-offers.component.html',
  styleUrls: ['./accept-offers.component.scss']
})
export class AcceptOffersComponent implements OnInit {


  displayedColumns = ['id', 'name', 'web-master-name', 'connect_button'];
    dataSource: MatTableDataSource<AcceptOffer>;
    acceptOffers: AcceptOffer[];

  constructor(public offerService : OfferService) {
  }


  async setDisplayColumns() {
      this.dataSource = new MatTableDataSource<AcceptOffer>(this.offerService.loadAllAcceptOffers());
      this.dataSource.paginator = this.paginator;
  }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    ngOnInit() {
      this.setDisplayColumns();
  }


}

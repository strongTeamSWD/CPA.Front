import {Component, OnInit, ViewChild} from '@angular/core';
import {OfferService} from '../../services/offerService';
import {Aim} from '../../models/Aim';
import {GeoTarget} from '../../models/GeoTarget';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Offer} from '../../models/Offer';



@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  displayedColumns = ['id', 'name', 'description', 'aims', 'levelId', 'minLevel', 'startDate'];
    dataSource: MatTableDataSource<Offer>;

  constructor(public offerService : OfferService) {
      this.dataSource = new MatTableDataSource<Offer>(this.offerService.offerslist);
  }


  setDisplayColumns() {

  }

    @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.setDisplayColumns();
    // this.offerService.loadAllOffers();
    this.dataSource.paginator = this.paginator;
  }


}

import {Component, Input, OnInit, ViewChild} from '@angular/core';
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

  displayedColumns = ['id', 'name', 'description', 'aims', 'levelId', 'minLevel', 'startDate', 'connect_button'];
    dataSource: MatTableDataSource<Offer>;
    @Input()
    offerslist: Offer[];

  constructor() {
  }


  async setDisplayColumns() {
      this.dataSource = await new MatTableDataSource<Offer>(this.offerslist);
      this.dataSource.paginator = this.paginator;
  }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    ngOnInit() {
      this.setDisplayColumns();
  }


}

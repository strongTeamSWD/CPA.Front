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

  displayedColumns = [];
    ELEMENT_DATA = [];

  constructor(public offerService : OfferService) {
    this.ELEMENT_DATA= this.offerService.offerslist;
    console.log(this.ELEMENT_DATA);
  }


  setDisplayColumns(){

      // this.displayedColumns = [
      //     { field: 'id', header: 'Vin' },
      //     { field: 'name', header: 'Year' },
      //     { field: 'description', header: 'Description' },
      //     { field: 'aims', header: 'Aims' },
      //     { field: 'levelId', header: 'Level Id' },
      //     { field: 'minLevel', header: 'Min Level' },
      //     { field: 'startDate', header: 'Start Date' },
      //     { field: 'accept_rate', header: 'accept rate' },
      // ];
      this.displayedColumns = ['id', 'name', 'description', 'aims', 'levelId', 'minLevel', 'startDate'];
  }
    dataSource = new MatTableDataSource<Offer>(this.ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.setDisplayColumns();
    this.offerService.loadAllOffers();
    this.dataSource.paginator = this.paginator;
  }


}
// export interface PeriodicElement {
//     id: number;
//     name: string;
//     description: string;
//     aims: Aim[];
//     levelID:number;
//     minLevel: number;
//     startDate: Date;
//     accept_rate: number;
// }



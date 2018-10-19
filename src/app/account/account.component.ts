import { Component, OnInit } from '@angular/core';
import { BUTTON_HELPERS } from './helpers.data';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
// import { fadeAnimation } from '../animation';
@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
   // animations: [fadeAnimation]

})
export class AccountComponent implements OnInit {

	buttonHelpers: any = BUTTON_HELPERS;
  	constructor() { }

  	ngOnInit() {

  	}
  	public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}

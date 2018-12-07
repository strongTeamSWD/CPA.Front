import { Component, OnInit, Input } from '@angular/core';
import { ToolbarHelpers } from './toolbar.helpers';
import {AuthService} from '../../services/authService';

@Component({
  selector: 'cdk-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	
  @Input() sidenav;
	@Input() sidebar;
	@Input() drawer;
	@Input() matDrawerShow;

	public username: string = null//this.authService.currentUser.login;
  
	searchOpen: boolean = false;
	signIn: boolean = false;
    toolbarHelpers = ToolbarHelpers;
  	constructor(public authService : AuthService) { }

  	ngOnInit() {
  		// this.toolbarHelpers.currentUser.currentUserName = this.authService.currentUser.login;
  	}

}

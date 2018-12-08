import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import {LocalStorageService} from '../../services/localStorageService';

@Component({
  selector: 'cdk-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
	isOpen: boolean = false;

  	//currentUser = null;
  	// Hari;
  	

	currentUser = null;

  	@HostListener('document:click', ['$event', '$event.target'])
  	onClick(event: MouseEvent, targetElement: HTMLElement) {
    	if (!targetElement) {
     		return;
    	}

    	const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    	if (!clickedInside) {
      		this.isOpen = false;
    	}
  	}
  	
    
  	constructor(private elementRef: ElementRef, public localStorageService : LocalStorageService)
	{ }


  	ngOnInit() {
  		this.currentUser = this.localStorageService.currentUser;
  	}

    logout() {
		console.log("Log out");
  		this.localStorageService.clear();
    }
}

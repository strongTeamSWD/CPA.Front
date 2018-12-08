import {Component, OnInit, Input, SimpleChanges, OnChanges, AfterContentChecked} from '@angular/core';
// import { menus } from '../../services/menu-element';
import {AuthService} from '../../services/authService';
import {MenuService} from '../../services/MenuService';

//'./logout-menu-element'

@Component({
  selector: 'cdk-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {//, OnChanges, AfterContentChecked

    @Input() iconOnly:boolean = false;
    // public menus = menus;


    constructor(public authService : AuthService, public menuService : MenuService) {

    }

    // ngOnChanges(changes: SimpleChanges){
    //
    //     // if (changes['authService.currentUser']) {
    //     //     this.menus = menus;
    //     // }
    //     if (this.authService.currentUser)
    //         this.menus = menus;
    // }
    // ngAfterContentChecked(){
    //     // if (this.authService.currentUser)
    //     //     this.menus = menus;
    // }


    ngOnInit() {
    }

}

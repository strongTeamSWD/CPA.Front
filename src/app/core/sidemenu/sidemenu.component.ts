import {Component, OnInit, Input, SimpleChanges} from '@angular/core';
import { menus } from './menu-element';
import {AuthService} from '../../services/authService';

//'./logout-menu-element'

@Component({
  selector: 'cdk-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

    @Input() iconOnly:boolean = false;
    public menus = menus;

    constructor(public authService : AuthService) {
        if (!this.authService.currentUser) {
            for(let m of menus){
                if (m.auth == true) {
                    let index = this.menus.indexOf(m);
                    this.menus.splice(index, 1);
                }
            }
        }
    }

    ngOnChanges(changes: SimpleChanges){

        // if (changes['authService.currentUser']) {
        //     this.menus = menus;
        // }
    }

    ngOnInit() {
    }

}

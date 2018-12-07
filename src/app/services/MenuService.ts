import {Injectable} from '@angular/core';
import { menus } from "./menu-element";
import {UserDetail} from '../models/UserDetail';
import {SERVER_API_URL} from '../variables/SERVER_API_URL';
import {AuthDetail} from '../models/AuthDetail';
import {HttpService} from './HttpService';
import {User} from '../models/User';

@Injectable()
export class MenuService {

    public menus = menus;
    constructor() {
        // for(let m of this.menus){
        //     if (m.onlyAuth == true) {
        //         let index = this.menus.indexOf(m);
        //         this.menus.splice(index, 1);
        //     }
        // }
    }

    public changeAuthorized(onlyAuth: boolean){
        this.menus = menus;
        if (onlyAuth) {
            for(let m of this.menus){
                if (m.onlyAuth) {
                    let index = this.menus.indexOf(m);
                    this.menus.splice(index, 1);
                }
            }
        }
    }
}
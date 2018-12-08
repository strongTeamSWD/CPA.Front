import {Injectable} from '@angular/core';
import {UserDetail} from '../models/UserDetail';
import {Router} from '@angular/router';

@Injectable()
export class LocalStorageService {

    currentUser = null;

    constructor(private router : Router){
    }

    setCurrentUser(user : UserDetail){
         localStorage.setItem("token",user.token);
         localStorage.setItem("guid",user.guid);
         localStorage.setItem("login",user.login);

        this.currentUser = this.getCurrentUser();
    }

    getCurrentUser() : UserDetail{
        let currUserDet = new UserDetail();
        currUserDet.token = localStorage.getItem("token");
        currUserDet.guid = localStorage.getItem("guid");
        currUserDet.login = localStorage.getItem("login");

        return currUserDet;
    }

    hasCurrentUser(){
        if(this.getCurrentUser().token)
           return true;
        else
            return false;
    }

    clear() {
        this.currentUser = null;
        localStorage.clear();
        this.router.navigate(["/login"]);

    }
}
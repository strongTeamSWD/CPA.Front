import {Injectable} from '@angular/core';
import {UserDetail} from '../models/UserDetail';
import {SERVER_API_URL} from '../variables/SERVER_API_URL';
import {AuthDetail} from '../models/AuthDetail';
import {HttpService} from './HttpService';
import {User} from '../models/User';
import {MenuService} from './MenuService';
import {HttpResponseTypes} from '../variables/HttpResponseTypes';

@Injectable()
export class AuthService {
    public currentUser : UserDetail;

    constructor(private httpService : HttpService, private menuService : MenuService, )
    {}

    public register(user: User){
       return this.httpService.post(SERVER_API_URL.REGISTER_URL, user, HttpResponseTypes.JSON);
    }

    public login(user:AuthDetail) {
        let param = {
            login    : user.login,
            password : user.password
        };

      return this.httpService.post(SERVER_API_URL.LOGIN_URL,param,HttpResponseTypes.JSON);
    }

    /*TODO COOKIES
    *        this.currentUser = new UserDetail();
        this.currentUser.login = user.login;
        this.currentUser.token = user.token;
        this.currentUser.guid = user.guid;
        this.menuService.changeAuthorized(false);
    * */

    public logout()
    {
        this.currentUser.clear();
    }
}
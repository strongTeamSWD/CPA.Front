import {Injectable} from '@angular/core';
import {UserDetail} from '../models/UserDetail';
import {SERVER_API_URL} from '../variables/SERVER_API_URL';
import {AuthDetail} from '../models/AuthDetail';
import {HttpService} from './HttpService';
import {User} from '../models/User';
import {MenuService} from './MenuService';

@Injectable()
export class AuthService {
    public currentUser : UserDetail;

    constructor(private httpService : HttpService, private menuService : MenuService, )
    {}

    public register(user: User){
        let userD = new AuthDetail();
        userD.login = user.login;
        userD.password = user.password;
        this.httpService.post(SERVER_API_URL.REGISTER_URL, user, null);
        this.login(userD);
    }

    public login(user:AuthDetail) {
        this.currentUser = new UserDetail();
        this.currentUser.login = user.login;
        this.currentUser.token = user.token;
        this.currentUser.guid = user.guid;
        this.menuService.changeAuthorized(false);
      return this.httpService.post(SERVER_API_URL.LOGIN_URL,user,"json");
    }

    public logout()
    {
        this.currentUser.clear();
    }
}
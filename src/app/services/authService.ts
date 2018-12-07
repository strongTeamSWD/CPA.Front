import {Injectable} from '@angular/core';
import {UserDetail} from '../models/UserDetail';
import {SERVER_API_URL} from '../variables/SERVER_API_URL';
import {AuthDetail} from '../models/AuthDetail';
import {HttpService} from './HttpService';
import {User} from '../models/User';

@Injectable()
export class AuthService {
    public currentUser : UserDetail;

    constructor(private httpService : HttpService)
    {}

    public register(user: User){
        this.currentUser = new UserDetail();
        this.currentUser.login = user.login;
        this.httpService.post(SERVER_API_URL.REGISTER_URL, user, null);
    }

    public login(user:AuthDetail) {
        this.currentUser.login = user.login;
        this.currentUser.token = user.token;
        this.currentUser.guid = user.guid;
      return this.httpService.post(SERVER_API_URL.LOGIN_URL,user,"json");
    }

    public logout()
    {
        this.currentUser.clear();
    }
}
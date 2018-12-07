import {Injectable} from '@angular/core';
import {UserDetail} from '../models/UserDetail';
import {SERVER_API_URL} from '../variables/SERVER_API_URL';
import {AuthDetail} from '../models/AuthDetail';
import {HttpService} from './HttpService';

@Injectable()
export class AuthService {
    currentUser : UserDetail;

    constructor(private httpService : HttpService)
    {}

    public login(user:AuthDetail) {

      return this.httpService.post(SERVER_API_URL.LOGIN_URL,user,"json");
    }

    public logout()
    {
        this.currentUser.clear();
    }
}
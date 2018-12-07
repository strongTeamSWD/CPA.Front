import { Observable } from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req.headers.append('MS-ASPNETCORE-TOKEN', 'de0f4bbb-7fbf-403c-95c6-4233f09fb28fa');
        req.headers.append('Access-Control-Allow-Origin', '*')
        req.headers.append('Access-Control-Allow-Methods', 'GET, OPTIONS')
        req.headers.append('Access-Control-Allow-Headers', 'Content-Type')
        console.log("Interseptor");
        return next.handle(req);

    }
}
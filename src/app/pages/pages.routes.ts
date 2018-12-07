import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {OffersComponent} from './offers/offers.component';
import {AuthComponent} from '../auth/auth.component';

const pagesRoutes: Routes = [
    {
        path: '', children: [
            {path: '/contact', component: ContactComponent,},
            {path: '/about', component: AboutComponent,},
            {path: '/offers', component: OffersComponent,},]
    }];

@NgModule({
    imports: [
        RouterModule.forRoot(pagesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRouterModule {
}

import {NgModule} from '@angular/core';
import {Routes, RouterModule, ActivatedRoute} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {StatisticComponent} from './statistic/statistic.component';
import {AuthComponent} from '../auth/auth.component';
import {DashboardCrmComponent} from '../dashboard-crm/dashboard-crm.component';
import {PagesComponent} from './pages.component';
import {OffersComponent} from './offers/offers.component';
import {OfferDetailsComponent} from './offerDetails/offer-details.component';
import {CreateOfferComponent} from './create-offer/create-offer.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {AcceptOffersComponent} from './accept-offers/accept-offers.component';

const pagesRoutes: Routes = [
    {
        path: '', component:PagesComponent,children: [
            { path: '', loadChildren: '../dashboard-crm/dashboard-crm.module#DashboardCrmModule' },
            { path: 'material-widgets', loadChildren: '../material-widgets/material-widgets.module#MaterialWidgetsModule' },
            { path: 'tables', loadChildren: '../tables/tables.module#TablesModule' },
            { path: 'maps', loadChildren: '../maps/maps.module#MapsModule' },
            { path: 'charts', loadChildren: '../charts/charts.module#ChartsModule' },
            { path: 'chats', loadChildren: '../chats/chat.module#ChatsModule' }, // fix this
            { path: 'mail', loadChildren: '../mail/mail.module#MailModule' }, // fix this
            { path: 'pages', loadChildren: '../pages/pages.module#PagesModule' },
            { path: 'forms', loadChildren: '../forms/forms.module#FormModule' }, //fix this
            { path: 'guarded-routes', loadChildren: '../guarded-routes/guarded-routes.module#GuardedRoutesModule' },
            { path: 'editor', loadChildren: '../editor/editor.module#EditorModule' },
            { path: 'scrumboard', loadChildren: '../scrumboard/scrumboard.module#ScrumboardModule' },
            {path: 'contact', component: ContactComponent,},
            {path: 'about', component: AboutComponent,},
            {path: 'offers', component: OffersComponent,},
            {path: 'offerDetail/:id', component: OfferDetailsComponent,},
            {path: 'statistic', component: StatisticComponent},
            {path: 'newOffer', component: CreateOfferComponent},
            {path: 'profile', component: UserProfileComponent},
            {path: 'acceptOffers', component: AcceptOffersComponent}],
    }];

@NgModule({
    imports: [
        RouterModule.forChild(pagesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRouterModule {
}

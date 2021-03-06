import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule, MatCell,
    MatCheckboxModule, MatDatepickerModule, MatDividerModule, MatExpansionModule, MatFooterCell, MatGridListModule, MatHeaderCell,
    MatIconModule,
    MatInputModule,
    MatListModule, MatPaginatorModule, MatSelectModule, MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
} from '@angular/material';
import {TableModule} from 'primeng/table';
import {MatChipsModule} from '@angular/material/chips';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PagesRouterModule} from './pages.routes';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {CoreModule} from '../core/core.module';
import {StatisticComponent} from './statistic/statistic.component';
import {OffersComponent} from './offers/offers.component';
import {PagesComponent} from './pages.component';

import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import {OfferDetailsComponent} from './offerDetails/offer-details.component';
import {CreateOfferComponent} from './create-offer/create-offer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DetailComponent} from './create-offer/detail/detail.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {AcceptOffersComponent} from './accept-offers/accept-offers.component';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};


@NgModule({
    imports: [
        MatCardModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatTableModule,
        MatButtonToggleModule,
        TableModule,
        MatInputModule,
        MatTabsModule,
        MatToolbarModule,
        MatIconModule,
        MatCheckboxModule,
        MatListModule,
        MatSidenavModule,
        PerfectScrollbarModule,
        MatChipsModule,
        CoreModule,
        PagesRouterModule,
        MatPaginatorModule,
        MatGridListModule,
        MatDividerModule,
        MatExpansionModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatDatepickerModule,
        FormsModule,
    ],
    declarations: [   
        ContactComponent,
        AboutComponent,
        ServicesComponent,
        StatisticComponent,
        OffersComponent,
        PagesComponent,
        OfferDetailsComponent,
        CreateOfferComponent,
        DetailComponent,
        UserProfileComponent,
        AcceptOffersComponent
    ],
    exports: [
        CdkTableModule,
        MatHeaderCell,
        MatFooterCell,
        MatCell,
    ],
    providers: [

        {provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}
    ]
})
export class PagesModule {
}

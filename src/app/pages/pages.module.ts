import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
} from '@angular/material';

import {MatChipsModule} from '@angular/material/chips';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PagesRouterModule} from './pages.routes';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {CoreModule} from '../core/core.module';
import {OffersComponent} from './offers/offers.component';
import {PagesComponent} from './pages.component';

import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {MatSidenavModule} from '@angular/material/sidenav';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};


@NgModule({
    imports: [
        MatCardModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
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
        PagesRouterModule ],
    declarations: [   
        ContactComponent,
        AboutComponent,
        ServicesComponent,
        OffersComponent,
        PagesComponent,
    ],
    exports: [
    ],
    providers: [
        {provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}
    ]
})
export class PagesModule {
}

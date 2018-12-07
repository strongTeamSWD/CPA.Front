import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';
import {RegisterComponent} from '../pages/register/register.component';

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
        { path: 'register', loadChildren: '../pages/register/register.module#RegisterModule' },

    ]
}];

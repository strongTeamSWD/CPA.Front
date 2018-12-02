import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import {ScrumboardComponent} from '../../scrumboard/scrumboard.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { UserRegisterComponent } from './user-register/user-register.component';

export const routes: Routes = [
    {path: '', component: RegisterComponent},
];


@NgModule({
    imports: [
        MatCardModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        FormsModule,
        MatTabsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        RegisterComponent,
        AdminRegisterComponent,
        UserRegisterComponent
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class RegisterModule { }


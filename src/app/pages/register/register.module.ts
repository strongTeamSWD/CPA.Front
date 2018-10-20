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

// const routes: Routes = [
//     {path: '', component: RegisterComponent},
// ];

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
        ReactiveFormsModule,
        // RouterModule.forChild(routes)
    ],
    declarations: [
        RegisterComponent
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class RegisterModule { }


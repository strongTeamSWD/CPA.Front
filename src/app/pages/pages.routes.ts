import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import {RegisterComponent} from './register/register.component';

const pagesRoutes: Routes = [
  	{ path: 'contact', component: ContactComponent ,data: { animation: 'contact' } },
  	{ path: 'about', component: AboutComponent ,data: { animation: 'about' }},
  	{ path: 'services', component: ServicesComponent ,data: { animation: 'services' }},
  	{ path: 'register', component: RegisterComponent ,data: { animation: 'register' }},
];

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class PagesRouterModule {}
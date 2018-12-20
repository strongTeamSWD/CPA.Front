import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixedTableComponent } from './fixed-table/fixed-table.component';
import { FeatureTableComponent } from './feature-table/feature-table.component';

const materialWidgetRoutes: Routes = [
  	{ path: 'fixed', component: FixedTableComponent , data: { animation: 'fixed' }},
  	{ path: 'featured', component: FeatureTableComponent ,data: { animation: 'featured' }},
];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class TablesRouterModule {}
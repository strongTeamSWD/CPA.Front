import { Component, OnInit } from '@angular/core';

export interface Statistic {
    name: string;
    value: string;
}

export interface Bill {
    currency: string;
    balance: string;
    hold: string;
    available: string;
}

@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.scss']
})



export class ScrumboardComponent {

    // displayedColumns: string[] = ['name', 'value'];
    // developers: Array<string> = [];

    statistiscs: Statistic[] = [
        {name: 'Click-throughs', value: '0'},
        {name: 'Number of accepted actions', value: '0'},
        {name: 'Number of actions in the processing', value: '0'},
        {name: 'Earned RUR', value: '0.00 p'},
        {name: 'Earned USD', value: '0.00 $'},
        {name: 'Earned EUR', value: '0.00 €'}];
    bills: Bill[] = [
        {currency: 'RUR\nRoubles', balance: '412.17 p',
            hold: '0.00 p', available: '412.17 p'},
        {currency: 'USD\nUSD', balance: '0.53 $',
            hold: '0.00 $', available: '0.53 $'},
        {currency: 'KZT\nTenge', balance: '0.00 T',
            hold: '0.00 T', available: '0.00 T'}];


}

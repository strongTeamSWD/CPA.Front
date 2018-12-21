import {Injectable} from '@angular/core';

import {UserDetail} from '../models/UserDetail';
import {SERVER_API_URL} from '../variables/SERVER_API_URL';
import {AuthDetail} from '../models/AuthDetail';
import {HttpService} from './HttpService';
import {User} from '../models/User';
import {LocalStorageService} from './localStorageService';

@Injectable()
export class MenuService {
    public menus = [
        {
            'name': 'Main Menu',
            'icon': 'widgets',
            'link': false,
            'open': false,
            'active' : true,
            'sub': [
                // {
                //     'name': 'ACCOUNT',
                //     'link': '/material-widgets/buttons',
                //     'icon': 'indeterminate_check_box',
                //     'chip': false,
                //     'open': false,
                //     'auth': true
                // },
                {
                    'name': 'ABOUT US',
                    'link': '/material-widgets/list',
                    'icon': 'list',
                    'chip': false,
                    'open': false,
                    'active': true,
                },
                ////////////////////////////////////////////////////
                // {
                //
                //     'name': 'OUR ADS',
                //     'link': '/material-widgets/stepper',
                //     'icon': 'view_week',
                //     'chip': false,
                //     'open': false,
                //
                // },
                // {
                //     'name': 'CLIENTS',
                //     'link': '/material-widgets/expansion',
                //     'icon': 'web_aaset',
                //     'chip': false,
                //     'open': false,
                // },
                ////////////////////////////////////////////////////
                {
                    'name': 'CONTACT US',
                    'link': '',
                    // material-widgets/spinner
                    'icon': 'cached',
                    'chip': false,
                    'open': false,
                    'active': true
                },
            ]
        },
        {
            'name': 'OFFERS',
            'link': '/offers',
            'icon': 'crop_16_9',
            'chip': false,
            'open': false,
            'active': true//this.localStorageService.hasCurrentUser()
        },
        {
            'name': 'Statistics',
            'open': false,
            'link': '/statistic',
            'icon': 'show_chart',//'apps',
            'active': true//this.localStorageService.hasCurrentUser()
        },
        {
            'name': 'Create offer',
            'open': false,
            'link': '/newOffer',
            'icon': 'create',
            'active': true//this.localStorageService.hasCurrentUser()
        },
        {
            'name': 'Profile',
            'open': false,
            'link': '/profile',
            'icon': 'create',
            'active': true//this.localStorageService.hasCurrentUser()
        },
        {
            'name': 'AcceptOffers',
            'open': false,
            'link': '/acceptOffers',
            'icon': 'create',
            'active': true//this.localStorageService.hasCurrentUser()
        },

        //  {
        //     'name': 'Summary',
        //     'icon': 'apps',
        //     'link': '/',
        //     'open': false,
        //     'active': true//this.localStorageService.hasCurrentUser()
        // },
        // {
        //     'name': 'Sources',
        //     'icon': 'filter_center_focus',
        //     'link': '/tables/responsive',
        //     'open': false,
        //     'active': true//this.localStorageService.hasCurrentUser()
        // }, {
        //     'name': 'My Offers-fixed',
        //     'open': false,
        //     'link': '/tables/fixed',
        //     'icon': 'grade',
        //     'active': true//this.localStorageService.hasCurrentUser()
        // }, {
        //     'name': 'Tools-featured',
        //     'open': false,
        //     'link': '/tables/featured',
        //     'icon': 'grade',
        //     'active': true
        // }, {
        //     'name': 'Statistics-responsive',
        //     'open': false,
        //     'link': '/tables/responsive',
        //     // material-widgets/icons
        //     'icon': 'grade',
        //     'active': true//this.localStorageService.hasCurrentUser()
        // },














        // {
        //     'name': 'Applications',
        //     'icon': 'view_module',
        //     'open': false,
        //     'link': false,
        //     'sub': [
        //         {
        //             'name': 'chat',
        //             'icon': 'chat',
        //             'link': 'chats/chat',
        //             'open': false,
        //         },
        //         {
        //             'name': 'mail',
        //             'icon': 'mail',
        //             'link': 'mail/mail',
        //             'open': false,
        //         },
        //         {
        //             'name': 'Editor',
        //             'icon': 'editor',
        //             'link': 'editor/editor',
        //             'open': false,
        //         }
        //     ]
        // }
        // , {
        //
        //     'name': 'Charts',
        //     'icon': 'pie_chart_outlined',
        //     'open': false,
        //     'link': false,
        //     'sub': [
        //         {
        //             'name': 'chartjs',
        //             'icon': 'view_list',
        //             'link': 'charts/chartjs',
        //             'open': false,
        //
        //         },
        //         {
        //             'name': 'ngx-chart',
        //             'icon': 'show_chart',
        //             'open': false,
        //             'link': 'charts/ngx-charts',
        //         },
        //         {
        //             'name': 'nvd3',
        //             'icon': 'pie_chart',
        //             'open': false,
        //             'link': 'charts/nvd3-charts',
        //         }
        //     ]
        // }, {
        //     'name': 'maps',
        //     'icon': 'map',
        //     'open': false,
        //     'link': false,
        //     'sub': [
        //         {
        //             'name': 'google-map',
        //             'icon': 'directions',
        //             'link': 'maps/googlemap',
        //             'open': false,
        //         },
        //         {
        //             'name': 'leaflet-map',
        //             'icon': 'directions',
        //             'link': 'maps/leafletmap',
        //             'open': false,
        //         }
        //     ]
        // }
    ];
    constructor(public localStorageService : LocalStorageService)
    {}
}
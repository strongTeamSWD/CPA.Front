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
                //     'link': '',
                //     // material-widgets/buttons
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
                // {
                //
                //     'name': 'OUR ADS',
                //     'link': 'material-widgets/stepper',
                //     'icon': 'view_week',
                //     'chip': false,
                //     'open': false,
                //
                // },
                // {
                //     'name': 'CLIENTS',
                //     'link': 'material-widgets/expansion',
                //     'icon': 'web_aaset',
                //     'chip': false,
                //     'open': false,
                // },
                {
                    'name': 'CONTACT US',
                    'link': '',
                    // material-widgets/spinner
                    'icon': 'cached',
                    'chip': false,
                    'open': false,
                    'active': true
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
                    'icon': 'grade',
                    'active': true//this.localStorageService.hasCurrentUser()
                },
                {
                    'name': 'Create offer',
                    'open': false,
                    'link': '/newOffer',
                    'icon': 'grade',
                    'active': true//this.localStorageService.hasCurrentUser()
                },
            ]
        },
        {
            'name': 'Log out',
            'link': '/logout',
            'icon': 'gif',
            // 'chip': false,
            'open': false,
            'active': this.localStorageService.hasCurrentUser()
        }, {
            'name': 'Log in',
            'link': '/login',//../register
            'icon': 'gif',
            // 'chip': false,
            'open': false,
            'active': !this.localStorageService.hasCurrentUser()
        }, {
            'name': 'Register',
            'link': '/register',
            'icon': 'gif',
            // 'chip': false,
            'open': false,
            'active': !this.localStorageService.hasCurrentUser()
        }, {
            'name': 'Summary',
            'icon': 'mode_edit',
            'link': '/auth/scrumboard',
            'open': false,
            'active': this.localStorageService.hasCurrentUser()
        }, {
            'name': 'Sources',
            'icon': 'filter_center_focus',
            'link': 'tables/responsive',
            'open': false,
            'active': this.localStorageService.hasCurrentUser()
        }, {
            'name': 'My Offers-fixed',
            'open': false,
            'link': 'tables/fixed',
            'icon': 'grade',
            'active': this.localStorageService.hasCurrentUser()
        }, {
            'name': 'Tools-featured',
            'open': false,
            'link': 'tables/featured',
            'icon': 'grade',
            'active': true
        }, {
            'name': 'Statistics-responsive',
            'open': false,
            'link': 'tables/responsive',
            // material-widgets/icons
            'icon': 'grade',
            'active': this.localStorageService.hasCurrentUser()
        },
        // {
        //     'name': 'Promotion',
        //     'open': false,
        //     'link': '',
        //     'icon': 'grade',
        //     'active': false
        //
        // },
        // {
        //     'name': 'Referral',
        //     'open': false,
        //     'link': '',
        //     'icon': 'grade',
        //     'active': true
        // }, {
        //     'name': 'Finance',
        //     'open': false,
        //     'link': '',
        //     'icon': 'grade',
        //     'active': true
        // }, {
        //     'name': 'Support',
        //     'open': false,
        //     'link': '',
        //     'icon': 'grade',
        //     'active': true
        // },












        // {
        //     'name': 'Tables',
        //     'icon': 'list',
        //     'link': false,
        //     'open': false,
        //     'chip': { 'value': 2, 'color': 'accent' },
        //     'sub': [
        //         {
        //             'name': 'Fixed',
        //             'icon': 'filter_list',
        //             'link': 'tables/fixed',
        //             'open': false,
        //         },
        //         {
        //             'name': 'Feature',
        //             'icon': 'done_all',
        //             'link': 'tables/featured',
        //             'open': false,
        //         },
        //         {
        //             'name': 'Responsive Tables',
        //             'icon': 'filter_center_focus',
        //             'link': 'tables/responsive',
        //             'open': false,
        //         }
        //     ]
        //
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
        //     'name': 'Pages',
        //     'icon': 'content_copy',
        //     'open': false,
        //     'link': false,
        //     'sub': [
        //         {
        //             'name': 'Login',
        //             'icon': 'work',
        //             'open': false,
        //             'link': '../register',
        //         }, {
        //             'name': 'Services',
        //             'icon': 'local_laundry_service',
        //             'open': false,
        //             'link': 'pages/services',
        //         }, {
        //             'name': 'Contact',
        //             'icon': 'directions',
        //             'open': false,
        //             'link': 'pages/contact'
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
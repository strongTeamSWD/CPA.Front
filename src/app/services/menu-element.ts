export const menus = [
    {
        'name': 'Main Menu',
        'icon': 'widgets',
        'link': false,
        'open': false,
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
                'link': 'material-widgets/list',
                'icon': 'list',
                'chip': false,
                'open': false,
                'onlyAuth': false,
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
                'onlyAuth': false
            },
            // {
            //     'name': 'OFFERS',
            //     'link': '',
            //     // material-widgets/cards
            //     'icon': 'crop_16_9',
            //     'chip': false,
            //     'open': false,
            //     'auth': true
            // },
        ]
    },
    {
        'name': 'Log out',
        'link': '',
        'icon': 'gif',
        // 'chip': false,
        'open': false,
        'onlyAuth': true
    }, {
        'name': 'Log in',
        'link': 'login',//../register
        'icon': 'gif',
        // 'chip': false,
        'open': false,
        'onlyAuth': false
    }, {
        'name': 'Register',
        'link': 'register',
        'icon': 'gif',
        // 'chip': false,
        'open': false,
        'onlyAuth': false
    }, {
        'name': 'Summary',
        'icon': 'mode_edit',
        'link': '/auth/scrumboard',
        'open': false,
        'onlyAuth': true
    }, {
        'name': 'Sources',
        'icon': 'filter_center_focus',
        'link': 'tables/responsive',
        'open': false,
        'onlyAuth': true
    }, {
        'name': 'My Offers-fixed',
        'open': false,
        'link': 'tables/fixed',
        'icon': 'grade',
        'onlyAuth': true
    }, {
        'name': 'Tools-featured',
        'open': false,
        'link': 'tables/featured',
        'icon': 'grade',
        'onlyAuth': false
    }, {
        'name': 'Statistics-responsive',
        'open': false,
        'link': 'tables/responsive',
        // material-widgets/icons
        'icon': 'grade',
        'onlyAuth': true
    },
    // {
    //     'name': 'Promotion',
    //     'open': false,
    //     'link': '',
    //     'icon': 'grade',
    //     'onlyAuth': false
    //
    // },
    // {
    //     'name': 'Referral',
    //     'open': false,
    //     'link': '',
    //     'icon': 'grade',
    //     'onlyAuth': true
    // }, {
    //     'name': 'Finance',
    //     'open': false,
    //     'link': '',
    //     'icon': 'grade',
    //     'onlyAuth': true
    // }, {
    //     'name': 'Support',
    //     'open': false,
    //     'link': '',
    //     'icon': 'grade',
    //     'onlyAuth': true
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

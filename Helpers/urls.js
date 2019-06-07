import Feeder from './../Helpers/Feeder';

export default {
    //LOGIN
    'login' : Feeder.url+'login',

    //SIGNUP
    'signup' : Feeder.url+"signup",

    //HOME
    'due-date' : Feeder.url+'home/dueDate',
    'recent-events' : Feeder.url+'home/recentEvents',
    'productivity' : Feeder.url+'home/productivity',
    'notifications' : Feeder.url+'home/notifications',
    'home-checklist' : Feeder.url+'home/checklist',

    //MATERIAL MANAGER
    'preparation' : Feeder.url+'materials/preparation',
    'fm' : Feeder.url+'materials/qa',
    'ordering' : Feeder.url+'materials/ordering',

    //PREFAB PLANNER
    'prefabs' : Feeder.url+'prefabs-list',
    'po' : Feeder.url+'orders-list',

    //PRODUCTION MANAGER
    'detailing' : Feeder.url+'manager/detailing',
    'manufacturing' : Feeder.url+'manager/manufacturing',
    'qa' : Feeder.url+'manager/qa',
    'pm-checklist' : Feeder.url+'manager/checklist',
    
    //INVENTORY MANAGER
    'im' : Feeder.url+'im',

    //SUPPLY CHAIN MANAGER
    'ps-order' : Feeder.url+'scm/production-status/order-view',
    'ps-item' : Feeder.url+'scm/production-status/item-view',
    'ps-cal' : Feeder.url+'scm/production-status/cal-view',
    'ms-order' : Feeder.url+'scm/material-status/order-view',
    'ms-item' : Feeder.url+'scm/material-status/item-view',
    'ship-order' : Feeder.url+'scm/shipping/order-view',
    'ship-item' : Feeder.url+'scm/shipping/item-view',
    'ship-empty-item' : Feeder.url+'scm/shipping/order-view-empty-orders',
    'scm-checklist': Feeder.url+'scm/checklist',

    //App & PROJECTS
    'project' : Feeder.url+'settings/projects',
    'members' : Feeder.url+'settings/members',
    'companies' : Feeder.url+'settings/companies',
    'company-profile' : Feeder.url+'settings/company-profile',

    //WEB-QR
    'web-qr' : Feeder.url+'webqr',
    'web-item-qr' : Feeder.url+'qrItemView',

    //ACCOUNT-SETTINGS
    'account-settings' : Feeder.url+'account',

    //Help
    'help' : Feeder.url+'help'
}
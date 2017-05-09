import angular from 'angular';
import 'angular-ui-router';
import ngDialog from 'ng-dialog';
import calendarComponent from './calendar.component';
import hoursService from './hours.service';

import './calendar.scss';


const module = angular.module('calendar.module', ['ui.router', 'ngDialog'])
    .component('calendar', calendarComponent)
    .service('HoursService', hoursService)
    .config(($stateProvider) => {
        "ngInject"; // ng-annotate doesn't handle arrow functions automatically; need to add the directive prologue.
        $stateProvider
            .state('calendar', {
                url: '/calendar',
                template: '<calendar></calendar>'
            });
    })
    .name;

export default module;
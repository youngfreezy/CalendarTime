import angular from 'angular';
import 'angular-ui-router';
import ngDialog from 'ng-dialog';
import homeComponent from './home.component';
import hoursService from './hours.service';

import './home.scss';


const module = angular.module('home.module', ['ui.router', 'ngDialog'])
    .component('home', homeComponent)
    .service('HoursService', hoursService)
    .config(($stateProvider) => {
        "ngInject"; // ng-annotate doesn't handle arrow functions automatically; need to add the directive prologue.
        $stateProvider
            .state('home', {
                url: '/home',
                template: '<home></home>'
            });
    })
    .name;

export default module;
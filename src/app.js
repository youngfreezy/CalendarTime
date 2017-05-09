import angular from 'angular';

import 'angular-ui-router';
import 'angular-sanitize';

import Calendar from './calendar';

import appComponent from './application.component';

import './app.scss';


angular
    .module('synopsis', ['ui.router', 'ngSanitize', Calendar])
    .config(($locationProvider) => {
        "ngInject"; // ng-annotate doesn't handle arrow functions automatically; need to add the directive prologue.
        $locationProvider.html5Mode(true);
    })
    .config(($urlRouterProvider) => {
        "ngInject"; // ng-annotate doesn't handle arrow functions automatically; need to add the directive prologue.
        $urlRouterProvider.otherwise('/calendar');
    })
    .component('app', appComponent);

angular
    .element(document)
    .ready(() => angular.bootstrap(document, ['synopsis']));
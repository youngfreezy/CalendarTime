/* eslint-disable no-console */
class HoursService {
    /*@ngInject*/
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
        this.mockData = [{
            start: '9am',
            end: '10am'
        }, {
            start: '10am',
            end: '11am'
        }, {
            start: '11am',
            end: '12pm'
        }, {
            start: '12pm',
            end: '1pm'
        }, {
            start: '1pm',
            end: '2pm'
        }, {
            start: '2pm',
            end: '3pm'
        }, {
            start: '3pm',
            end: '4pm'
        }, {
            start: '4pm',
            end: '5pm'
        }];
    }

    getHours() {
        return this.$q.resolve(this.mockData);
    }
}

export default HoursService;
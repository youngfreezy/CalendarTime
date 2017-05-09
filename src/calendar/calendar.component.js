import '../../node_modules/ng-dialog/css/ngDialog.min.css';
import '../../node_modules/ng-dialog/css/ngdialog-theme-default.min.css';

function CalendarController(HoursService, ngDialog) {
    const $ctrl = this;
    $ctrl.$onInit = function() {
        this.hoursService = HoursService;
        this.hours = [];
        this.hoursService
            .getHours()
            .then((hours) => this.hours = hours);
        // TODO: error handling	
    }

    $ctrl.clickToOpen = function(hourClicked, HoursService) {
        $ctrl.dialog = ngDialog.open({
            controllerAs: '$ctrl',
            controller: function() {
                this.hourClicked = hourClicked;
                this.save = function() {
                    if (this.hourClicked.name && this.hourClicked.number) {
                        this.hourClicked.booked = true;
                    }
                    $ctrl.dialog.close();
                }
                this.clear = function () {
                	this.hourClicked.name = "";
                	this.hourClicked.number = "";
                	this.hourClicked.booked = false;
                	$ctrl.dialog.close();
                }
            },
            plain: true,
            template: require('./modal.html'),
            showClose: false,
            closeByDocument: false
        });
    }

}

const calendarComponent = {
    template: require('./calendar.html'),
    controller: CalendarController
};

export default calendarComponent;
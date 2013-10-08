'use strict';

/* App Module */
angular.module('phonecat', ['phonecatFilters', 'phonecatServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/reports', {templateUrl: 'partials/report-list-standard.html',   controller: ReportListCtrl}).
      when('/light', {templateUrl: 'partials/report-list-light.html', controller: ReportListCtrl}).
      when('/reports/:reportId', {templateUrl: 'partials/report-detail.html', controller: ReportDetailCtrl}).
      otherwise({redirectTo: '/reports'});
}]);

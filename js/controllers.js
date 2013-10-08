'use strict';

/* Controllers */

function ReportListCtrl($scope, Report) {
  $scope.reports = Report.query();
  $scope.orderProp = 'id';
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];

function ReportDetailCtrl($scope, $routeParams, Report) {
  $scope.report = Report.get({reportId: $routeParams.reportId}, function(report) {
    $scope.mainImageUrl = report.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];

'use strict';

/* Controllers */

function TemplateListCtrl($scope, Template) {
  $scope.templates = Template.query();
  $scope.orderProp = 'size';
}
 

function TemplateNewDetailCtrl($scope, $routeParams, Template) {
  $scope.template = Template.get({templateId: $routeParams.templateId}, function(template) {
   // $scope.mainImageUrl = template.images[0];
   $scope.editFields = 'hi edit fields';
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}


function SignEditDetailCtrl($scope, $routeParams, Sign) {
  $scope.sign = Sign.get({signId: $routeParams.signId}, function(sign) {
    //$scope.mainImageUrl = sign.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];

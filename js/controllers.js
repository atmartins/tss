'use strict';

/* Controllers */

function TemplateListCtrl($scope, Template, RunTime) {
  $scope.templates = Template.query();
  $scope.orderProp = 'size';

  //$scope.template = $scope.template || {};
  $scope.mytemplate = 'hi';
  
  $scope.setTheme = function(_theme) {
    $scope.theme = RunTime.theme = _theme;    
  }

  /* Set the template object to this scope and our runtime service */
  $scope.setTemplate = function(template) {
     $scope.template = RunTime.template = template;
  }
  
  $scope.getTemplate = function(_templateId){
    
  }
}

function TemplateNewDetailCtrl($scope, $routeParams, Template, RunTime) {
  $scope.template = Template.get({templateId: $routeParams.templateId}, function(template) {
    $scope.theme = RunTime.theme; //assign theme based on user choice (user choice stored in RunTime service)
    $scope.template = RunTime.template;
  });
}

function SignEditDetailCtrl($scope, $routeParams, Sign) {
  $scope.sign = Sign.get({signId: $routeParams.signId}, function(sign) {
    //$scope.mainImageUrl = sign.images[0];
  });
}

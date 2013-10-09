'use strict';

/* Controllers */

function TemplateListCtrl($scope, Template, RunTime) {
  $scope.templates = Template.query();
  $scope.orderProp = 'size';

  //$scope.template = $scope.template || {};
  
  $scope.setTheme = function(_theme) {
    $scope.theme = RunTime.theme = _theme;    
  }

  $scope.setTemplate = function() {
     
     $scope.template = RunTime.template = Template.get({templateId: _templateId}, function(template) {
      
    });  
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

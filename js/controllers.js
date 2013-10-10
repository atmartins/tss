'use strict';

/* Controllers */

function TemplateListCtrl($scope, Template, RunTime) {
  $scope.templates = Template.query();
  $scope.templateOrder = 'id'; //default order of templates
  $scope.theme = 'none'; //initially
  $scope.show = {
    hud:false,
    step2:false
  };
  
  //Let this scope and the shared scope know which theme was selected
  //by user.
  $scope.setTheme = function(_theme) {
    $scope.theme = RunTime.theme = _theme;
   // $scope.showHud = true;
     $scope.show.step2 = true;
     $scope.show.hud = true;
  }

  $scope.templateFields = {};

  //Let this scope and the shared scope know which template was selected
  //by user.
  $scope.setTemplate = function(template) {
    $scope.template = RunTime.template = template;
    //console.log(template);
    $scope.fullTemplate = Template.get({templateId: template.id}, function(template) {
        //$scope.templateFields = $scope.fullTemplate.fields;
    });
    
  }

  $scope.isCurrency = function(field){
    return (field.type === "currency");
  }
  $scope.isText = function(field){
    return (field.type === "text");
  }

  $scope.thumbnailSrc = function(){
    return '/img/' + $scope.template.slug + '/thumbnail/' + $scope.theme + '.png';
  }

  $scope.print = function(){
    window.print()
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

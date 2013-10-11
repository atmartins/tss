'use strict';

/* Controllers */

function TemplateListCtrl($scope, Template, RunTime) {
  $scope.templates = Template.query();
  $scope.templateOrder = 'id'; //default order of templates
  $scope.theme = 'none'; //initially
  $scope.show = {
    //set to false during production.
    //TODO add the other steps
    hud:true,
    step2:true
  };
  
  $scope.previewerhtml = '/partials/previewer.html';
  
  //Let this scope and the shared scope know which theme was selected
  //by user.
  $scope.setTheme = function(_theme) {
    $scope.theme = RunTime.theme = _theme;
   // $scope.showHud = true;
     $scope.show.step2 = true;
     $scope.show.hud = true;
  }

  $scope.templateFields = {};

  //Let this scope and the shared scope know whichs template was selected
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
  $scope.isDisclaimer = function(field){
    return (field.type === "disclaimer");
  }
  $scope.thumbnailSrc = function(){
    return '/img/' + $scope.template.slug + '/thumbnail/' + $scope.theme + '.png';
  }
  
  $scope.mediumSrc = function(){
    return '/img/' + $scope.template.slug + '/medium/' + $scope.theme + '.png';
  }

  $scope.print = function(){
    console.log('Printing');
    var purl = '/print.php'
    + '?template=' + $scope.template.slug
    + '&theme=' + $scope.theme;
    for(var i = 0; i < $scope.fullTemplate.fields.length; i++){
      purl += '&'
      + $scope.fullTemplate.fields[i].id
      + '='
      + $scope.fullTemplate.fields[i].value;
    }
    console.log(encodeURI(purl)); //TODO build /print.php which takes all this stuff and builds out a print template
    //Bonus points, this url will be book-markable

    //Make a print button on that page with this:
    //window.print()
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

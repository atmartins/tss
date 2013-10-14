'use strict';

function BuildCtrl($scope, Template) {
    $scope.templates = Template.query();

    $scope.templateOrder = 'id'; //default order of templates
    $scope.theme = 'none'; //default
    
    $scope.previewerhtml = '/partials/previewer.html';
    $scope.printState = 'build';
    
    $scope.show = {
        hud: true,
        print: false
    };  
    
    $scope.template = {};
    //Let this scope know which theme was selected by user.
    
    $scope.setTheme = function (theme) {
        $scope.theme = theme;
    }
   

    //Let this scope know which template was selected by user.
    $scope.setTemplate = function (template) {
        $scope.template = template;
        $scope.fullTemplate = Template.get({
            templateId: template.id
        }, function (template) {});
    }

    $scope.isCurrency = function (field) {
        return (field.type === "currency");
    }

    $scope.isText = function (field) {
        return (field.type === "text");
    }

    $scope.isDisclaimer = function (field) {
        return (field.type === "disclaimer");
    }
/*
    $scope.thumbnailSrc = function () {
        return '/img/' + $scope.template.slug + '/thumbnail/' + $scope.theme + '.png';
    }
*/
    $scope.mediumSrc = function () {
        if($scope.template.slug && $scope.theme){
            return '/img/' + $scope.template.slug + '/medium/' + $scope.theme + '.png'
        } else {
            return '';
        }
        //return ;
    }

    $scope.build = function () {
        console.log('Building');
       
        //Bonus points, this url will be book-markable
        //Make a print button on that page with this:
        $scope.printState = 'build';
        //window.print()
    }
    $scope.print = function () {
        console.log('Printing');
       
        //Bonus points, this url will be book-markable
        //Make a print button on that page with this:
        $scope.printState = 'print';
        //window.print()
    }
}


//TODO future: save and edit signs
function SignEditDetailCtrl($scope, $routeParams, Sign) {
    $scope.sign = Sign.get({
        signId: $routeParams.signId
    }, function (sign) {
        //$scope.mainImageUrl = sign.images[0];
    });
}

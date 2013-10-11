'use strict';

function BuildCtrl($scope, Template) {
    $scope.templates = Template.query();
    $scope.templateOrder = 'id'; //default order of templates
    $scope.theme = 'none'; //initially
    $scope.previewerhtml = '/partials/previewer.html';
    $scope.show = {
        hud: true
    };  
    
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

    $scope.thumbnailSrc = function () {
        return '/img/' + $scope.template.slug + '/thumbnail/' + $scope.theme + '.png';
    }

    $scope.mediumSrc = function () {
        return '/img/' + $scope.template.slug + '/medium/' + $scope.theme + '.png';
    }

    $scope.print = function () {
        console.log('Printing');
        var purl = '/print.php' + '?template=' + $scope.template.slug + '&theme=' + $scope.theme;
        for (var i = 0; i < $scope.fullTemplate.fields.length; i++) {
            purl += '&' + $scope.fullTemplate.fields[i].id + '=' + $scope.fullTemplate.fields[i].value;
        }
        console.log(encodeURI(purl)); //TODO build /print.php which takes all this stuff and builds out a print template
        //Bonus points, this url will be book-markable
        //Make a print button on that page with this:
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

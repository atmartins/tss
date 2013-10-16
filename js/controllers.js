'use strict';

function BuildCtrl($scope, Template) {
    //Get our list of templates (including thumbnail images, etc)
    $scope.templates = Template.query();
    
    //default order of templates
    $scope.templateOrder = 'id';

    //default theme choice. User will change this value later
    $scope.theme = 'none'; 
    
    //path to our primary "include"
    //we use this included HTML multiple times, so it was isolated 
    //in a separate file for efficient reuse.
    $scope.previewerhtml = 'partials/previewer.html';

    //the application state
    $scope.applicationState = 'build';
    
    //Current state of certain "hide-able" elements in the page
    $scope.show = {
        hud: true //the hud can be toggled on/off
    };  
    
    //Create a blank template object to avoid potential property access errors
    //This is populated after user makes a template choice
    $scope.template = {};

    //Let this scope know which theme was selected by user.
    //@param (string) theme slug
    $scope.setTheme = function (theme) {
        $scope.theme = theme;
    }
   

    //Let this scope know which template was selected by user.
    //@param (object) template object
    $scope.setTemplate = function (template) {
        $scope.template = template;
        $scope.fullTemplate = Template.get({
            templateId: template.id
        }, function (template) {
            var curTheme = $scope.theme; //hold current theme, check if supported
            $scope.theme = 'none'; //assume theme is unsupported by new template choice
            for(var i = 0; i < template.themes.length; i++){
                if(template.themes[i].id == curTheme){
                    $scope.theme = curTheme; //template supports theme choice, revert to it
                }
            }
        });
    }

    //check if the field object is of type "currency"
    //@param (object) field object
    $scope.isCurrency = function (field) {
        return (field.type === "currency");
    }
    
    //check if the field object is of type "text"
    //@param (object) field object
    $scope.isText = function (field) {
        return (field.type === "text");
    }
    
    //check if the field object is of type "disclaimer"
    //@param (object) field object
    $scope.isDisclaimer = function (field) {
        return (field.type === "disclaimer");
    }

    //Return the appropriate path for a template image
    //@param (string) size
    $scope.getSrc = function (size) {
        if($scope.template.slug && $scope.theme){
            return 'img/'+$scope.template.slug+'/'+size+'/'+$scope.theme+'.png';
        } else {
            return '';
        }
    }

    //Change application state to "build"
    $scope.build = function () {
        $scope.applicationState = 'build';
    }

    //Change application state to "print"
    //Trigger window print event
    $scope.print = function () {       
        if($scope.theme == 'none'){
            //We require a theme
            alert('Please choose a theme (step 2)');
        } else {
            //show appropriate content
            $scope.applicationState = 'print';
            if( parseFloat($scope.fullTemplate.width) > parseFloat($scope.fullTemplate.height) ){
                alert('Remember to change print layout setting to landscape!');
            }
            setTimeout( function(){
                window.print();
            }, 1000 );
        }        
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

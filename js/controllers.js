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

    $scope.isCurrency = function (field) {
        return (field.type === "currency");
    }

    $scope.isText = function (field) {
        return (field.type === "text");
    }

    $scope.isDisclaimer = function (field) {
        return (field.type === "disclaimer");
    }

    //Return the appropriate path for medium resolution template image
    $scope.getSrc = function (size) {
        if($scope.template.slug && $scope.theme){
            return '/img/'+$scope.template.slug+'/'+size+'/'+$scope.theme+'.png';
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
       
        if($scope.theme == 'none'){
            alert('Please choose a theme (step 2)');
        } else {
            //show appropriate content
            $scope.printState = 'print';
            
            if( parseFloat($scope.fullTemplate.width) > parseFloat($scope.fullTemplate.height) ){
                console.log('landscape orientation');
                alert('Remember to change print layout setting to landscape!');
            } else {
                console.log('portrait orientation');
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

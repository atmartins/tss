'use strict';
angular.module('tssDirectives', ['ngResource'])
    .directive('switchtheme', function () {
        return function (scope, element, attrs) {
            element.bind("click", function () {
                scope.$apply(function () {
                    scope.setTheme(attrs.theme);
                });
                element.parent().children().removeClass("active");
                element.addClass('active');
            })
        }
    })
    .directive('switchtemplate', function () {
        return {
            restrict: "A",
            scope: {
                click: "&", //using parent scope, invoke the function specified as a parameter in our view (setTemplate(template))
                thistemplate: "=" //gets an object from the attribute in our view. makes available to directive scope
            },
            template: '<div class="switchtemplate" ng-click="click()">{{thistemplate.name}}' + '{{thistemplate.id}}' + '<img src="{{thistemplate.thumbnail}}" />' + '</div>',
            link:function(scope,element,attrs){
                element.bind("click", function () {
                    scope.$apply(function () {
                        scope.setTheme(attrs.theme);
                    });
                    //TODO not clearing .active from siblings because the don't have a common parent (they have a grandparent)
                    element.parent().parent().children().removeClass("active");
                    element.addClass('active');
                })
            }
        }
    });
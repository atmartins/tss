'use strict';
angular.module('tssDirectives', ['ngResource'])
    .directive('switchtheme', function () {
        return function (scope, element, attrs) {
            element.bind("click", function () {
                element.parent().children().removeClass("active");
                element.addClass('active');
            })
        }
    })
    .directive('switchtemplate', function () {
        return function (scope, element, attrs){
            element.addClass('switchtemplate');
            element.bind("click", function () {
                element.parent().parent().children().removeClass("active");
                element.parent().addClass('active');
            });
        }
    });

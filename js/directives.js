'use strict';

angular.module('tssDirectives', ['ngResource'])
  .directive('superman', function() {    
    return function(scope, element){
    	element.bind("mouseenter",function(){
    		console.log(scope.template.name + " mouse entered element");
    	})
    }
  });

angular.module('tssDirectives', ['ngResource'])
  .directive('switchtheme', function() {    
    return function(scope, element, attrs){
    	element.bind("click",function(){
    		scope.$apply(function () {
	            scope.setMyTheme(attrs.theme);
    	    });
    	})
    }
  });
'use strict';
/*
angular.module('tssDirectives', ['ngResource'])
  .directive('superman', function() {    
    return function(scope, element){
    	element.bind("mouseenter",function(){
    		console.log(scope.template.name + " mouse entered element");
    	})
    }
  });
*/
angular.module('tssDirectives', ['ngResource'])
  .directive('switchtheme', function() {    
    return function(scope, element, attrs){
    	element.bind("click",function(){
    		scope.$apply(function () {
	            scope.setTheme(attrs.theme);
    	    });
    	    element.parent().children().removeClass("active");
    	    element.addClass('active');
    	})
    }
  }).directive('switchtemplate', function() {
  	//Creates
    return {
    	restrict:"E",
    	scope:{
    		dial:"&", //using parent scope, invoke the function specified as a parameter in our view (setTemplate(template))
    		thistemplate:"=" //gets an object from the attribute in our view
    	},
    	template:'<div ng-click="dial()">Click here {{thistemplate.name}}, {{thistemplate.id}}</div>'/*,
    	link: function(scope, element, attrs){
    		scope.name = attrs.thistemplate;
    	}*/
    }
  });
'use strict';

/* Directives */
/*angular.module('tssDirectives', ['ngResource'])
  .directive('superman', function() {    
    return {
     	restrict:"E",
     	template:"<div>Here I am to save the day</div>"
    }
  });
*/
angular.module('tssDirectives', ['ngResource'])
  .directive('superman', function() {    
    return function(scope, element){
    	element.bind("mouseenter",function(){
    		console.log(scope.template.name + " mouse entered element");
    	})
    }
  });
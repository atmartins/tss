'use strict';

/* Filters */

angular.module('tssFilters', [])
.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
})
//Split a currency string into component parts and wrap with
//appropriate HTML
.filter('currencySplit', function() {
  //This relies on using "ng-bind-html-unsafe" in the DOM
  //That means angular will render the html, rather than returning a literal string
  //http://stackoverflow.com/questions/17561149/angularjs-filter-returning-html-as-string
  return function(input) {
  	//remove dollar sign (currency filter applied before)
  	//Angular currency filter is helpful beforehand for more than just the dollar sign
  	var nosign = input.slice(1,input.length); 

  	//break the amount apart on the decimal
  	var parts = nosign.split('.');
  	
  	//return the heavily marked up result so we can style the heck out of it
    var t = '<span class="dollar-sign">$</span>';
    t += '<span class="dollar-amt">' + parts[0] + '</span>'
    t += '<span class="decimal">.</span>'
    t += '<span class="cents-amt">' + parts[1] + '</span>'
    return t;
  };
})
.filter('disclaimer', function() {
  //If there is text, add an asterik.
  return function(input) {
  	if(input){
  		return "*" + input;
  	}
    return input;
  };
});

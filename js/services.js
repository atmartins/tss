'use strict';

/* Services */

/* A sign is a saved instance */
angular.module('tssServices', ['ngResource']).
  factory('Sign', function($resource){
    return $resource('signs/:signId.json', {}, {
    query: {method:'GET', params:{signId:'signs'}, isArray:true}
  });
});

/* A template is not created by the user (a sign is). */
angular.module('tssServices', ['ngResource']).
  factory('Template', function($resource){
    return $resource('templates/:templateId.json', {}, {
    	query: {method:'GET', params:{templateId:'templates'}, isArray:true}
  });
});


angular.module('tssServices').
  factory('RunTime', function(){
    return {
      template : {
        theme:'', //default
        layout: '' //default  
      }
    };
});

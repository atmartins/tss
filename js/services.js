'use strict';

/* Services */

angular.module('phonecatServices', ['ngResource']).
    factory('Report', function($resource){
        return $resource('reports/:reportId.json', {}, {
        query: {method:'GET', params:{reportId:'reports'}, isArray:true}
  });
});

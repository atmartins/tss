'use strict';

/* App Module */
angular.module('tss', 
	['tssFilters',
	 'tssServices',
	 'tssDirectives']
).config(
	['$routeProvider', function($routeProvider) {
  		$routeProvider.
      		when('/build', {templateUrl: 'partials/build.html',   controller: BuildCtrl}).
      		when('/print', {templateUrl: 'partials/print.html',   controller: BuildCtrl}).
      		when('/edit/:signId', {templateUrl: 'partials/edit-detail.html', controller: SignEditDetailCtrl}).
      		otherwise({redirectTo: '/build'});
		}
	]
);

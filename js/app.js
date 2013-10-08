'use strict';

/* App Module */
angular.module('tss', ['tssFilters', 'tssServices', 'tssDirectives']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/template-list', {templateUrl: 'partials/template-list.html',   controller: TemplateListCtrl}).
      when('/new/:templateId', {templateUrl: 'partials/template-new-detail.html', controller: TemplateNewDetailCtrl}).
      when('/edit/:signId', {templateUrl: 'partials/edit-detail.html', controller: SignEditDetailCtrl}).
      otherwise({redirectTo: '/template-list'});
}]);

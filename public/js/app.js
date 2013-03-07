'use strict';


// Declare app level module which depends on filters, and services
angular.module('billingApp', ['billingApp.filters', 'billingApp.services', 'billingApp.directives', 'ui.compat'])

	.config(['$stateProvider', '$routeProvider', '$urlRouterProvider', function($stateProvider, $routeProvider, $urlRouterProvider) {

		$stateProvider
			.state('bill', {
				abstract: true,
				templateUrl: 'partials/bill.html'
			})
			.state('bill.status', {
				abstract: true,
				templateUrl: 'partials/bill.status.html'
			})
			.state('bill.status.summary', {
				url: '/status',
				templateUrl: 'partials/bill.status.summary.html'
			})
			.state('bill.status.statement', {
				url: '/statement',
				templateUrl: 'partials/bill.status.statement.html'
			})
			.state('bill.status.activity', {
				url: '/new-activity',
				templateUrl: 'partials/bill.status.activity.html'
			})
			.state('bill.history', {
				abstract: true,
				templateUrl: 'partials/bill.history.html'
			})
			.state('bill.history.date', {
				url: '/history',
				templateUrl: 'partials/bill.history.date.html'
			})
			.state('bill.history.terms', {
				url: '/terms',
				templateUrl: 'partials/bill.history.terms.html'
			})
			.state('bill.history.statements', {
				url: '/statements',
				templateUrl: 'partials/bill.history.statements.html'
			})
			.state('payment', {
				url: '/payment',
				templateUrl: 'partials/payment.html'
			});
        
	}])
	
	.run([ '$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
		$state.transitionTo('bill.status.summary');
	}]);
'use strict';


// Declare app level module which depends on filters, and services
angular.module('billingApp', ['billingApp.filters', 'billingApp.services', 'billingApp.directives', 'ui', 'ui.compat', 'ui.bootstrap'])

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
				templateUrl: 'partials/bill.status.summary.html',
				data: { title: 'Summary' }
			})
			.state('bill.status.statement', {
				url: '/statement',
				templateUrl: 'partials/bill.status.statement.html',
				data: { title: 'Most Recent Statement' }
			})
			.state('bill.status.activity', {
				url: '/new-activity',
				templateUrl: 'partials/bill.status.activity.html',
				data: { title: 'New Activity' }
			})
			.state('bill.history', {
				abstract: true,
				templateUrl: 'partials/bill.history.html'
			})
			.state('bill.history.date', {
				url: '/history',
				templateUrl: 'partials/bill.history.date.html',
				data: { title: 'Activity by date' }
			})
			.state('bill.history.terms', {
				url: '/terms',
				templateUrl: 'partials/bill.history.terms.html',
				data: { title: 'Terms' }
			})
			.state('bill.history.statements', {
				url: '/statements',
				templateUrl: 'partials/bill.history.statements.html',
				data: { title: 'Statements' }
			})
			.state('payment', {
				url: '/payment',
				templateUrl: 'partials/payment.html',
				data: { title: 'Payment Options' }
			});
        
	}])
	
	.run([ '$rootScope', '$state', '$stateParams', '$filter', function($rootScope, $state, $stateParams, $filter) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
		
		$rootScope.title = function(t) {
			return (t ? t + ' - ' : '') + 'Billing';
		}
		
		$rootScope.campus = 'BL';
		
		$rootScope.config = {
			'BL': {
				defermentUrl: 'http://bursar.indiana.edu/pdo.php'
			},
			'IUPUI': {
				defermentUrl: 'http://www.bursar.iupui.edu/paymentopts.asp'
			}
		};
		
		$rootScope.dueDate = '2013-04-11';
		$rootScope.dueDateString = $filter('date')($rootScope.dueDate, 'MMMM d');
		$rootScope.realTimeBalance = 1045.09;
		$rootScope.newCharges = '550.00';
		$rootScope.newPayments = '200.00';
		$rootScope.newActivity = '50.00';
		$rootScope.amountDue = 495.09;
		$rootScope.adjustedBalance = 695.09;
		
		var originalDeferment = {
			amount: 250,
			pay: 50, // 250 - 200
		};
		
		var recalculatedDeferment = {
			amount: 225,
			pay: 225
		};
		
		$rootScope.deferment = {
			selectedAmount: originalDeferment.amount, // for radio selection
			selection: originalDeferment, // to access object properties
			original: originalDeferment,
			recalculated: recalculatedDeferment
		};
		
		//$rootScope.originalDefermentAmount = 250;
		//$rootScope.adjustedOriginalDefermentAmount = 50; // 250 - 200
		//$rootScope.recalculatedDefermentAmount = 225;
		//$rootScope.defermentAmount = $rootScope.originalDefermentAmount;

		$rootScope.useCases = {
			selected: 0,
			cases: [
				{ label: 'Due < Real-time', value: 0 },
				{ label: 'Due > Real-time', value: 1 },
				{ label: 'No deferment available', value: 2 },
				{ label: 'Anticipated Aid not received', value: 3 },
				{ label: 'Balance paid', value: 4 },
				{ label: 'Nothing due', value: 5 },
				{ label: 'All balances zero', value: 6 }
			]
		};

		$state.transitionTo('bill.status.summary');
	}]);
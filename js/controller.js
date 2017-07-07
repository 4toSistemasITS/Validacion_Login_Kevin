'use strict';
var app= angular.module("login",['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('login',{
			url: '/login',
			templateUrl: 'vistas/login.html',
			controller: 'VistaPrincipal'
		})
	$urlRouterProvider.otherwise("/login");
});

app.controller('Validar', function($scope) {
    $scope.user = '';
    $scope.password = '';
});

app.controller('VistaPrincipal', function($scope) {
	
});
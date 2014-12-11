'use strict';

var app = angular.module("MasterChef", []);

angular.module('MasterChef')    
    .controller('mainController', ['$scope', function(scope){
    	scope.someValue = 'Test Value from Controller';
    }]);
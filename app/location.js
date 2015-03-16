'use strict';

var appLocation = angular.module('app.location', []);

appLocation.service('LocationService', function() {


	this.list = function() {
		return [
		{ name: "Dave's Downtown" },
		{ name: "Ginelli's Pizza" },
		{ name: "Ah Sah Wan" },
		{ name: "Real Meal Deli" },
		{ name: "Valentino" },
		{ name: "La Loma" },
		{ name: "Cheetah Pizza" },
		{ name: "Chipotle" }	
		];
	};
});

appLocation.controller('LocationController', ['LocationService', function (LocationService) {
	this.locations = [];
	this.newLocationName = "";

	this.locations = LocationService.list();

	this.submit = function() {
		this.locations.push({name: this.newLocationName});
	}
}]);
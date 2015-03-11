var location = angular.module('location', []);

location.service('LocationService', function() {

	this.restaurants = [
		{ name: "Dave's Downtown" },
		{ name: "Ginelli's Pizza" },
		{ name: "Ah Sah Wan" },
		{ name: "Real Meal Deli" },
		{ name: "Valentino" },
		{ name: "La Loma" },
		{ name: "Cheetah Pizza" },
		{ name: "Chipotle" }	
	];

	this.list = function() {
		return restaurants;
	}
});

location.controller('LocationController', function() {

});
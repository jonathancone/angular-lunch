'use strict';

var appLocation = angular.module('app.location', []);

appLocation.service('LocationService', function() {

	this.list = function() {
		return [
		{ name: "Dave's Downtown", address: "900 2nd Ave S, Minneapolis, MN 55402", votes: {up: 0, down: 0} },
		{ name: "Ginelli's Pizza", address: "121 S 8th St #235, Minneapolis, MN 55454", votes: {up: 0, down: 0} },
		{ name: "Ah Sah Wan", address: "121 S 8th St #225, Minneapolis, MN 55402", votes: {up: 0, down: 0} },
		{ name: "Real Meal Deli", address: "733 S Marquette Ave # 220, Minneapolis, MN 55402", votes: {up: 0, down: 0} },
		{ name: "Valentino", address: "900 2nd Ave S #120, Minneapolis, MN 55402", votes: {up: 0, down: 0} }
		];
	};
});

appLocation.controller('LocationController', ['$scope', 'LocationService', function ($scope, LocationService) {
	this.locations = [];
	this.newLocation = {}

	this.locations = LocationService.list();

	this.addLocation = function() {
		if(!$scope.newLocationForm.$valid){
			return;
		}

		this.locations.push({name: this.newLocation.name, address: this.newLocation.address, votes: {up: 0, down: 0}});
	};

	this.resetVotes = function() {
		for(loc in this.locations) {
			loc.votes.up = 0;
			loc.votes.down = 0;
		}
	};

	this.upVote = function(location) {
		location.votes.up = location.votes.up + 1;

	};

	this.downVote = function(location) {
		location.votes.down = location.votes.down + 1;
	};

}]);
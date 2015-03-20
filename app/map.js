'use strict';

var appMap = angular.module('app.map', []);

appMap.service('MapService', function() {
	var map = {};
	var mapOptions = {};
	var geocoder = {};

	this.initialize = function() {
		mapOptions = {
		  center: { lat: -34.397, lng: 150.644},
		  zoom: 5
		};

		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		
	};
});

appMap.run(['MapService', function(MapService) {
	google.maps.event.addDomListener(window, 'load', MapService.initialize);
}]);


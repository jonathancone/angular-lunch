'use strict';

var appMap = angular.module('app.map', ['app.location']);

appMap.service('MapService', ['LocationService', function(LocationService) {
	var map = {};
	var mapOptions = {};
	var geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(44.9778, -93.2650);
	var self = this;


	this.drawMarkers = function() {

		var locations = LocationService.list();


		for(var current of locations) {		
			geocoder.geocode({'address': current.address}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					map.setCenter(results[0].geometry.location);
					var marker = new google.maps.Marker({map: map, position: results[0].geometry.location });					
				} else {
					console.log("Geocode was not successful for the following reason: " + status);
				}
			});	
		}

	};

	this.initialize = function() {

		mapOptions = {
		  center: latlng,
		  zoom: 17
		};

		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		self.drawMarkers();
	};


	
}]);

appMap.run(['MapService', function(MapService) {
	google.maps.event.addDomListener(window, 'load', MapService.initialize);
}]);


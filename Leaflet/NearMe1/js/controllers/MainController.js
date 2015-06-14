app.controller('MainController', ['$scope', function($scope) {
  angular.extend($scope, {
    //defaults: {
      //scrollWheelZoom: false
    //},
    mapCenter: {
            lat: 40.741934,
            lng: -74.004897,
            zoom: 17
    },
    markers: {
            Marker1: {
                lat: 40.741389,
                lng: -74.003056,
                message: "111 Eighth Avenue"
            },
            Marker2: {
                lat: 40.7425,
              lng: -74.006111,
              message: "Chelsea Market"
            },
    }
    });
}]);
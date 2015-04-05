function onGoogleReady () {
    angular.bootstrap(document.getElementsByTagName('body')[0], ['myApp']);
}


var app=angular.module("myApp",['ui.map']);
app.controller("MainController",function($scope){
    $scope.mapOptions={
      center:new google.maps.LatLng(25.124433,55.123144),
      zoom:15
    };
    $scope.addMarker=function(event,params){
      new google.maps.Marker({
        map:$scope.MyMap,position:params[0].latLng
        });  
    };
});

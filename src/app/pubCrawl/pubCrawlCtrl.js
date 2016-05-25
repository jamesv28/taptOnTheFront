(function () {
    angular.module('app')
        .controller('pubCrawlCtrl', pubCrawlCtrl);

    pubCrawlCtrl.$inject = ['$scope', 'uiGmapGoogleMapApi'];

    function pubCrawlCtrl($scope, uiGmapGoogleMapApi) {
        // $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
        uiGmapGoogleMapApi.then(function(maps) {
            console.log('this is a map', maps);
        });
    }

}); //end of controller
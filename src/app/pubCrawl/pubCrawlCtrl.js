(function () {
    angular.module('app')
        .controller('pubCrawlCtrl', pubCrawlCtrl);

    pubCrawlCtrl.$inject = ['$scope', 'uiGmapGoogleMapApi'];

    function pubCrawlCtrl($scope, uiGmapGoogleMapApi) {
        $scope.map = {
            center: {
                latitude: 56.162939,
                longitude: 10.203921
            },
            zoom: 8
        };
        uiGmapGoogleMapApi.then(function(maps) {
            console.log('this is a map', maps);
        });
    }

})(); //end of controller
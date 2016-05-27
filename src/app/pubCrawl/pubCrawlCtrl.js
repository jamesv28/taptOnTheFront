(function () {
    angular.module('app')
        .controller('pubCrawlCtrl', pubCrawlCtrl);

    pubCrawlCtrl.$inject = ['$scope', 'uiGmapGoogleMapApi','pubCrawlService'];

    function pubCrawlCtrl($scope, uiGmapGoogleMapApi, pubCrawlService) {

        var p1 = pubCrawlService.findLattitude();

        var p2 = pubCrawlService.findLongitude();

        Promise.all([p1,p2]).then(function (data) {
            console.log('primise all', data);
            $scope.map = {
                center: {
                    latitude: data[0],
                    longitude: data[1]
                },
                zoom: 4
            };
            console.log('map', $scope.map);
            $scope.$apply();
        });


        uiGmapGoogleMapApi.then(function(maps) {
            // console.log('this is a map', maps);
        });
    }

})(); //end of controller
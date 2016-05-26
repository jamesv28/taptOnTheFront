angular.module('app')
    .controller('indBeerTypesCtrl', ['$scope', '$routeParams', 'getIndBeersService', function ($scope,$routeParams, getIndBeersService) {
        $scope.id = $routeParams.id;
        console.log('hello');
        getIndBeersService.getBeer($scope.id)
            .then(function (data) {
                $scope.beer = data;
            })
    }]); // end of controller
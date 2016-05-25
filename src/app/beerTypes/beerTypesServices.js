angular
    .module('app')
    .service('beerTypesService', ['$http', function($http){

        return {
            getBeerTypes: function() {
                return $http({
                    method: 'GET',
                    url: 'https://tranquil-falls-61925.herokuapp.com/'
                })
                    .then(function (data) {
                        console.log('this is data', data);
                        return data;
                    })
            }
        }

    }] );

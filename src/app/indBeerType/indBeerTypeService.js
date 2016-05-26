angular
    .module('app')
    .service('getIndBeersService', ['$http', function ($http) {
        return {
            getBeer: function (id) {
                return $http({
                    method: 'GET',
                    url: 'https://tranquil-falls-61925.herokuapp.com/beertypes/' + id
                })
                    .then(function (data) {
                        return data;
                    })
            }
        }
    }]); // end of service
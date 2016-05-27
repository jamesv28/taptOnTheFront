angular
    .module('app')
    .service('pubCrawlService', ['$http', function ($http) {
        return {
            findLattitude: function () {
                var promise = new Promise(function (resolve, reject) {
                    var lat;
                  
                    navigator.geolocation.getCurrentPosition(foundLocation );
                    function foundLocation(position) {
                        lat  = position.coords.latitude;
                        resolve( lat);

                    }

                });
                // console.log('promise', promise);

                return promise;
            },
            findLongitude: function () {
                var promise2 = new Promise(function (resolve, reject) {
                    var long;
                    navigator.geolocation.getCurrentPosition(foundlocation);
                    function foundlocation(position) {
                        long = position.coords.longitude;
                        resolve(long);
                    } 
                });
               
                return promise2;
            }
        }
    }]);

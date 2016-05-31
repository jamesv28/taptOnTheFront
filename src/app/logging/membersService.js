angular
    .module('app')
    .service('membersService',['$http','$window', function ($http, $window) {
        var baseUrl = 'http://tranquil-falls-61925.herokuapp.com';
        return {
            signUp: function () {
                return $http({
                    method: 'POST',
                    url: baseUrl + '/userRegister'
                }).then(function (data) {
                    return data;
                }).catch(function (err) {
                    return err;
                });
            },
            setUserInfo: function(user) {
                $window.localStorage.setItem('user', JSON.stringify(user.data));
                $window.localStorage.setItem('token', JSON.stringify(user.token));
            }
        }
    }]); //end of service
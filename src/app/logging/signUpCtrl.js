angular.module('app')
    .controller('signUpCtrl',['$scope','$state', 'membersService', function ($scope,$state, membersService) {
        $scope.user = {};
        $scope.signUp = function () {
            membersService.signUp(this.user)
                .then(function (data) {
                    membersService.setUserInfo(data);
                    $state.go('home');
                })
        }
    }]); //end of controller
angular
    .module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('signUp', {
                url: '/signUp',
                templateUrl: 'app/logging/signUp-template.html',
                controller: 'signUpCtrl'
            })
    }); //end of route
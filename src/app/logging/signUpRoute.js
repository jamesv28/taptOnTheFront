angular
    .module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('signUp', {
                url: '/signUp',
                templateUrl: 'app/loggin/signUp-template.html'
            })
    }); //end of route
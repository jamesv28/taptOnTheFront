angular.module('app')
    .config( function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('pubCrawl', {
                url: '/pubCrawl',
                templateUrl: 'app/pubCrawl/pubCrawl-template.html'
                // controller: 'pubCrawlCtrl'
            });

    });

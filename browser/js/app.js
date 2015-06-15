'use strict';
window.app = angular.module('FullstackGeneratedApp', ['ui.router', 'ui.bootstrap', 'fsaPreBuilt', 'ngStorage']);

app.config(function ($urlRouterProvider, $locationProvider) {
    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    $locationProvider.html5Mode(true);
    // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
    $urlRouterProvider.otherwise('/');
});

// This app.run is for controlling access to specific states.
app.run(function ($rootScope, AuthService, $state) {

    // The given state requires an authenticated user.
    var destinationStateRequiresAuth = function (state) {
        return state.data && state.data.authenticate;
    };

    var destinationStateRequiresAdminAuth = function (state) {
        return state.data && state.data.adminAuthenticate;
    };

    // $stateChangeStart is an event fired
    // whenever the process of changing a state begins.
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

        if (!destinationStateRequiresAuth(toState) && !destinationStateRequiresAdminAuth(toState)) {
            // The destination state does not require authentication
            // Short circuit with return.
            return;
        }
        if(destinationStateRequiresAdminAuth(toState) && AuthService.isAdminAuthenticated() ||
          (destinationStateRequiresAuth(toState) && AuthService.isAuthenticated())) {
            return;
        }

        // Cancel navigating to new state.
        event.preventDefault();

        AuthService.getLoggedInUser().then(function (user) {
            // If a user is retrieved, then renavigate to the destination
            // (the second time, AuthService.isAuthenticated() will work)
            // otherwise, if no user is logged in, go to "login" state.
            if (user) {
                if(user.admin) {
                    $state.go(toState.name, toParams);
                } else {
                    $state.go('store');
                }
            } else {
                $state.go('login');
            }
        });

    });

});
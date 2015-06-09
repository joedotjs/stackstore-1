app.config(function ($stateProvider) {
    $stateProvider.state('cake-builder', {
        url: '/cake-builder',
        templateUrl: 'js/cake_builder/cake-builder.html'
        controller: 'CakeBuilderCtrl'
    });

});

app.controller('CakeBuilderCtrl', function ($scope, AuthService, $state, $CakeFactory) {

    $scope.login = {};
    $scope.error = null;

    $scope.sendLogin = function (loginInfo) {

        $scope.error = null;

        AuthService.login(loginInfo).then(function () {
            $state.go('home');
        }).catch(function () {
            $scope.error = 'Invalid login credentials.';
        });

    };

});
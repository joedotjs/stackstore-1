app.config(function ($stateProvider) {

    $stateProvider.state('store', {
        url: '/store',
        templateUrl: 'js/store/store.html',
        controller: 'StoreCtrl'
    });

    $stateProvider.state('storeSingle', {
        url: '/store/:id',
        templateUrl: 'js/store/storeSingle.html',
        controller: 'StoreSingleCtrl'
    });



});

app.controller('StoreSingleCtrl', function ($scope, $state, StoreFCT, $stateParams) {
    StoreFCT.getOne($stateParams.id)
        .then(function (data) {
            console.log('SINGLE CAKE', data);
            $scope.cake = data.data;
        });
});

app.controller('StoreCtrl', function ($scope, AuthService, $state, StoreFCT) {

    StoreFCT.getAll().then(function (data) {
        console.log('DATA on controller', data.data);
        $scope.products = data.data;
    });
});
app.config(function ($stateProvider) {

    $stateProvider.state('storeCreate', {
        url: '/create-store',
        templateUrl: 'js/storeCreate/storeCreate.html',
        controller: 'StoreCreateCtrl'
    });


});

app.controller('StoreCreateCtrl', function ($scope, $state, StoreFCT, $stateParams, $localStorage) {

    // var cartData = [];

    // StoreFCT.getOne($stateParams.id)
    //     .then(function (data) {
    //         console.log('SINGLE CAKE', data);
    //         $scope.cake = data.data;
    //     });

    // $scope.addToCart = function (cake) {
    //     StoreFCT.addToCart($localStorage, cartData, cake);
    // }

    // $scope.removeFromCart = function (cake) {
    //     StoreFCT.removeFromCart($localStorage, cartData, cake);
    // }

});
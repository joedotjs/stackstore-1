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

app.controller('StoreSingleCtrl', function ($scope, $state, StoreFCT, $stateParams, $localStorage) {

    var cartData = [];

    StoreFCT.getOne($stateParams.id)
        .then(function (data) {
            $scope.cake = data.data;
        });

    $scope.addToCart = function (cake) {
        StoreFCT.addToCart($localStorage, cartData, cake);
    }

    $scope.removeFromCart = function (cake) {
        StoreFCT.removeFromCart($localStorage, cartData, cake);
    }

});

app.controller('StoreCtrl', function ($scope, AuthService, $state, StoreFCT, $localStorage, CartFactory) {

    var cartData = [];

    StoreFCT.getAll().then(function (data) {

        $scope.products = data.data.map(function (obj) {
            obj.layerNum = obj.layers.length;
            obj.reviewNum = obj.reviews.length;
            return obj;
        });

    });

    $scope.addToCart = function (cake) {

        if (AuthService.isAuthenticated()) {

            AuthService.getLoggedInUser().then(function (user) {
                StoreFCT.addToAuthCart(user, cake, CartFactory);
            });

        } else {

            StoreFCT.addToUnauthCart($localStorage, cartData, cake);

        }
    };

    $scope.removeFromCart = function (cake) {

        if (AuthService.isAuthenticated()) {

            AuthService.getLoggedInUser().then(function (user) {
                StoreFCT.removeFromAuthCart(user, cake, CartFactory);
            });

        } else {

            StoreFCT.removeFromUnauthCart($localStorage, cartData, cake);

        }

    };



});
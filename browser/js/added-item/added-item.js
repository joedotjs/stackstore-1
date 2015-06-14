app.config(function ($stateProvider) {
    $stateProvider.state('added-item', {
        url: '/store/added-item',
        templateUrl: 'js/added-item/added-item.html',
        controller: 'AddedItemCtrl'
    });

});

app.controller('AddedItemCtrl', function ($scope, AuthService, $state, CakeFactory, $localStorage, StoreFCT) {

	$scope.storeOfLastPurchase = $localStorage.cart[$localStorage.cart.length-1].storeId

	console.log(StoreFCT.getAllStores())

});
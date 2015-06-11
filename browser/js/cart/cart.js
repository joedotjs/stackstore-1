app.config(function ($stateProvider) {

    $stateProvider.state('cart', {
        url: '/localCart',
        templateUrl: 'js/cart/cart.html',
        controller: 'CartCtrl'
    });

});


app.controller('CartCtrl', function ($scope, $state, $stateParams, $localStorage, CartFactory, AuthService, AUTH_EVENTS) {

    var cartData = [];
    $scope.carts = $localStorage.cart;

    if (AuthService.isAuthenticated()) {
		AuthService.getLoggedInUser().then(function (user) {
	        $scope.user = user;
	    }).then(function () {
	    	var getCart = CartFactory.getCartByUser($scope.user);
	    	return getCart;
	    }).then(function (cart) {
	    	$scope.carts = cart.data[0].cakes;
	    	$scope.loggedIn = true;
	    });
	}


});
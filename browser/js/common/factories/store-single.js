app.factory('StoreSingleFCT', function ($http, AuthService, StoreFCT, $localStorage, CartFactory) {

    var getAll = function(storeId) {
        return $http.get(`/api/store/${storeId}`, function (data) {
            console.log('CAKE DATA', data);
            return data;
        });
    };

    

    var addToCart = function (cake) {
        if (AuthService.isAuthenticated()) {
            AuthService.getLoggedInUser().then(function (user) {
                StoreFCT.addToAuthCart(user, cake, CartFactory);
            });
        } else {
            var cartData = []
            StoreFCT.addToUnauthCart($localStorage, cartData, cake);
        }
    }


    var removeFromCart = function (cake) {
        if (AuthService.isAuthenticated()) {
            AuthService.getLoggedInUser().then(function (user) {
                StoreFCT.removeFromAuthCart(user, cake, CartFactory);
            });
        } else {
            var cartData = []
            StoreFCT.removeFromUnauthCart($localStorage, cartData, cake);
        }
    }

    return {
        getAll: getAll,
        addToCart: addToCart,
        removeFromCart: removeFromCart
    };

});
app.factory('CakeFactory', function ($http, $localStorage, CartFactory, AuthService) {

    return {

    	getCakes: function (cakeid) {
    		if (cakeid) {
    			return $http.get('/api/cake/' + cakeid).then(function(response){
	            	console.log('response.data', response.data);
	                return response.data;
	            });
    		}
            
        },

        getAllIngredients: function (storeId) {
            return $http.get('/api/store/'+storeId+'/cake_builder').then(function(ingredients){
                console.log("get ingredients hit from front end", ingredients)
                
                return ingredients
            });
        },
        storeCake: function (cakeObj, storeId){

            delete $localStorage.cake
            delete $localStorage.currentPrices

            if (AuthService.isAuthenticated()) {
                return $http.post('/api/store/'+storeId+'/cake_builder', cakeObj).then(function(cake){

            		console.log("cake returned after save",cake)
                    CartFactory.addToCart(cake)
            		return cake

            	});
            }
            else
            {
                CartFactory.addToCart(cakeObj)

            }
        }

    };

});

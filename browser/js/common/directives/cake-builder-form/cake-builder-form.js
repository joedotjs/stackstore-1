app.directive('buildForm', function (CakeFactory) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/cake-builder-form/cake-builder-form.html',
        link: function (scope) {

                CakeFactory.getAllIngredients().then(function(ingredients){

                    scope.ingredients  = ingredients.data;
                    scope.fillings = ingredients.data[0]
                    scope.icings = ingredients.data[1]
                    scope.shapes = ingredients.data[2]
                    // scope.layers = ingredients.data[3]
                    scope.reviews = ingredients.data[4]

                    //****** TO BE DONE: PERSIST CAKE OBJECT BETWEEN FEATURE SELECTIONS *******
                    

                    //build the cake object
                    scope.cake = {

                        layers: [{ position: 1},{position: 2},{ position: 3}]

                    }

                    //to update cake object properties
                    scope.update = function(prop, selected){
                        console.log("prop",prop)
                        if(prop !== "filling") scope.cake[prop] = selected;
                        console.log(scope.cake)

                        if(scope.cake["selectedNumLayers"]=== 2) {
                            angular.element(layerTwo).css("display","block")
                        }
                        if(scope.cake["selectedNumLayers"]=== 3) {
                            angular.element(layerTwo).css("display","block")
                            angular.element(layerThree).css("display","block")
     
                        }

                    }



                    //for selecting the property to update w update function
                    scope.filling = "filling"
                    scope.selectedNumLayers = "selectedNumLayers"
                    scope.icing = "icing"
                    scope.shape = "shape"
                    scope.numLayers = [1,2,3]



                });


                

            // scope.items = [
            //     { label: 'Home', state: 'home' },
            //     { label: 'Signup', state: 'signup' },
            //     { label: 'About', state: 'about' },
            //     { label: 'Store', state: 'store', auth: true },
            //     { label: 'Tutorial', state: 'tutorial' },
            //     { label: 'Members Only', state: 'membersOnly', auth: true }
            // ];

            // scope.user = null;

            // scope.isLoggedIn = function () {
            //     return AuthService.isAuthenticated();
            // };

            // scope.logout = function () {
            //     AuthService.logout().then(function () {
            //        $state.go('home');
            //     });
            // };

            // var setUser = function () {
            //     AuthService.getLoggedInUser().then(function (user) {
            //         scope.user = user;
            //     });
            // };

            // var removeUser = function () {
            //     scope.user = null;
            // };

            // setUser();

            // $rootScope.$on(AUTH_EVENTS.loginSuccess, setUser);
            // $rootScope.$on(AUTH_EVENTS.logoutSuccess, removeUser);
            // $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUser);

        }

    };

});
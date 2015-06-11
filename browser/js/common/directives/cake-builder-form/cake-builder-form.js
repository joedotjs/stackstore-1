app.directive('buildForm', function (CakeFactory, $localStorage) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/cake-builder-form/cake-builder-form.html',
        link: function (scope) {

                CakeFactory.getAllIngredients().then(function(ingredients){

                    

                    //make ingredients available on scope
                    scope.fillings = ingredients.data[0]
                    scope.icings = ingredients.data[1]
                    scope.shapes = ingredients.data[2]
                    scope.reviews = ingredients.data[4]

                    //build the cake object
                    scope.cake = {

                        name: null,
                        type: "custom",
                        price: 0,
                        shape: null,
                        icing: null,
                        layers: [{ position: 1, filling: null}
                        ,{position: 2, filling: null},{ position: 3, filling: null}]
                        ,
                        reviews: null,
                    }

                    if(!$localStorage.cake){
                        $localStorage.cake = {
                            name: null,
                            type: "custom",
                            price: 0,
                            shape: null,
                            icing: null,
                            layers: [{ position: 1, filling: null}
                            ,{position: 2, filling: null},{ position: 3, filling: null}]
                            ,
                            reviews: null,
                        };
                    }

                    //to update cake object properties
                    scope.update = function(prop, selected){
                        console.log("prop",prop)
                        if(prop !== "filling") scope.cake[prop] = selected;
                        console.log(scope.cake)

                        //check for layers desired and modify scope.cake.layers
                        if(scope.cake["selectedNumLayers"]=== 1) {
                            if(scope.cake.layers[1].filling !== null){
                                scope.cake.layers[1].filling = null;
                            }
                            if(scope.cake.layers[2].filling !== null){
                                scope.cake.layers[2].filling = null;
                            }
                            angular.element(layerTwo).css("display","none")
                            angular.element(layerThree).css("display","none")
                        }

                        if(scope.cake["selectedNumLayers"]=== 2) {
                            if(scope.cake.layers[2].filling !== null){
                                scope.cake.layers[2].filling = null;
                            }
                            angular.element(layerTwo).css("display","block")
                            angular.element(layerThree).css("display","none")
                            
                        }
                        if(scope.cake["selectedNumLayers"]=== 3) {
                            angular.element(layerTwo).css("display","block")
                            angular.element(layerThree).css("display","block")
     
                        }

                        //update localStorage.cake when scope.cake updates
                        scope.setCakeLocal = function(cake){
                            for(var key in cake){
                                $localStorage.cake.key = cake.key
                            }
                        }
                        scope.setCakeLocal(scope.cake)

                        //update price of cake
                        scope.priceUpdate = function(){

                            scope.cake.price = 0

                            if(scope.cake.icing !== null){
                                scope.cake.price += scope.cake.icing.price
                            }

                            for(var i=0; i < 3; i++){
                                
                                if(scope.cake.layers[i].filling !== null){
                                    scope.cake.price += scope.cake.layers[i].filling.price
                                }

                            }
                            console.log(scope.cake.price)
                        }
                        scope.priceUpdate();
                        
                    }

                    //for selecting the property to update w update function
                    scope.filling = "filling"
                    scope.selectedNumLayers = "selectedNumLayers"
                    scope.icing = "icing"
                    scope.shape = "shape"
                    scope.numLayers = [1,2,3]
 
                    
                    //bring storeCake function to scope
                    scope.storeCake = CakeFactory.storeCake

                    //persist cake in progress from local storage
                    scope.loadCakeFromLocal = function (){
                        scope.cake = $localStorage.cake;
                        console.log("loaded cake from localStorage",scope.cake)                       
                    }
                    scope.loadCakeFromLocal();

                });

        }

    };

});
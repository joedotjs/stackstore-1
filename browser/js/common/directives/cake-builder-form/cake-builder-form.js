app.directive('buildForm', function (CakeFactory, $localStorage, $stateParams, CartFactory) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/cake-builder-form/cake-builder-form.html',
        link: function (scope) {



                CakeFactory.getAllIngredients($stateParams.storeId).then(function(ingredients){

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

                    scope.currentPrices = {

                        layers : [
                            {position: 1, filling: null},
                            {position: 2, filling: null},
                            {position: 3, filling: null}
                        ]



                    }

                    if(!$localStorage.currentPrices){
                        $localStorage.currentPrices = {
                            
                            layers : [
                                {position: 1, filling: null},
                                {position: 2, filling: null},
                                {position: 3, filling: null}
                            ]
                        }
                    }

                    //store cost of last selected item to subtract from price upon replacement
                    // scope.cake.previousIcingPrice = 0 ;
                    // scope.cake.previousFillingPrice = [0,0,0];

                    //to update cake object properties
                    scope.update = function(propName, propObj, layerNum){

                        //set scope.cake property
                        if(propName === "selectedNumLayers"){
                            scope.cake.selectedNumLayers = propObj
                            scope.currentPrices.selectedNumLayers = propObj
                        }

                        //set properties on cake object and cake pricing object
                        
                        if(propName === "shape" || propName === "icing"){
                            
                            scope.cake[propName] = propObj._id
                            
                            scope.currentPrices[propName] = propObj
                            
                        }

                        if(layerNum === '1' || layerNum === '2' || layerNum === '3' ){
                            
                            scope.cake[propName][layerNum-1]['filling'] = propObj._id
                           
                            scope.currentPrices[propName][layerNum-1]['filling'] = propObj
                          
                        }



                        //check for layers desired and modify scope.cake.layers
                        
                        if(propName === "selectedNumLayers"){
                            // console.log(propObj)
                            if(propObj=== 1) {
                                if(scope.cake.layers[1].filling !== null){
                                    scope.cake.layers[1].filling = null;
                                }
                                if(scope.cake.layers[2].filling !== null){
                                    scope.cake.layers[2].filling = null;
                                }
                                angular.element(layerTwo).css("display","none")
                                angular.element(layerThree).css("display","none")
                            }

                            if(propObj=== 2) {
                                if(scope.cake.layers[2].filling !== null){
                                    scope.cake.layers[2].filling = null;
                                }
                                angular.element(layerTwo).css("display","block")
                                angular.element(layerThree).css("display","none")
                                
                            }
                            if(propObj=== 3) {
                                angular.element(layerTwo).css("display","block")
                                angular.element(layerThree).css("display","block")
         
                            }
                        }





                        //update localStorage when we change the cake
                        scope.setCakeLocal = function(cake, priceTracker){
                            for(var key in cake){
                                $localStorage.cake.key = cake.key
                                
                            }
                            for(var keyd in priceTracker){
                                $localStorage.currentPrices.keyd = priceTracker.keyd
                            }
    
                            delete cake.key
                            delete priceTracker.keyd
                        }
                        scope.setCakeLocal(scope.cake, scope.currentPrices)


     
                        //regenerate prices when we change the cake
                        scope.updatePrice = function(){
                            scope.cake.price = 0;
                            console.log("setting prices: price tracker", scope.currentPrices)
                            if(scope.currentPrices.icing){
                                scope.cake.price += scope.currentPrices.icing.price;
                            }
                            if(scope.currentPrices.layers[0].filling !== null){
                                scope.cake.price += scope.currentPrices.layers[0].filling.price
                            }
                            if(scope.currentPrices.layers[1].filling !== null){
                                scope.cake.price += scope.currentPrices.layers[1].filling.price
                            }
                            if(scope.currentPrices.layers[2].filling !== null){
                                scope.cake.price += scope.currentPrices.layers[2].filling.price
                            }
                            console.log("cake", scope.cake)    

                        }
                        scope.updatePrice()
                    }

                    // //for selecting the property to update w update function
                    scope.selectedNumLayers = "selectedNumLayers"
                    scope.numLayers = [1,2,3]
                    
                    //bring storeId to scope
                    scope.storeId = $stateParams.storeId
                    
                    // //bring storeCake function to scope
                    // scope.storeCake = CakeFactory.storeCake
                    scope.storeCake = CakeFactory.storeCake

                    //persist cake in progress from local storage
                    scope.loadCakeFromLocal = function (){
                        scope.cake = $localStorage.cake;
                        scope.currentPrices = $localStorage.currentPrices    

                    }
                    scope.loadCakeFromLocal();

                });

        }

    };

});
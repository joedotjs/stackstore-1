app.config(function ($stateProvider) {

    $stateProvider.state('adminHome', {
        url: '/admin',
        templateUrl: 'js/admin/home.html',
        controller: 'AdminCtrl'
    });

    $stateProvider.state('adminCategory', {
        url: '/admin/:category',
        templateUrl: 'js/admin/list.html',
        controller: 'AdminCateogryCtrl'
    });

    $stateProvider.state('adminStockCakes', {
        url: '/admin/cake',
        templateUrl: 'js/admin/cake/list.html',
        controller: 'AdminCakeCtrl'
    });

});

app.controller('AdminCtrl', function ($scope, $state, AdminFCT) {
    //nothing here yet
});

app.controller('AdminCakeCtrl', function ($scope, $state, AdminFCT) {
    AdminFCT.getAllCake().then(function (data) {
        $scope.itemList = data.data;
    });
});

app.controller('AdminCateogryCtrl', function ($scope, $state, AdminFCT, $stateParams) {

    $scope.activeEditId = '';

    if($stateParams.category === 'icing') {
        AdminFCT.getAllIcing().then(function (data) {
            $scope.cateName = 'Icing';
            $scope.itemList = data.data;
        });
    }
    else if($stateParams.category === 'filling') {
        AdminFCT.getAllFilling().then(function (data) {
            $scope.cateName = 'Filling';
            $scope.itemList = data.data;
        });
    }
    else if($stateParams.category === 'shape') {
        AdminFCT.getAllShape().then(function (data) {
            $scope.cateName = 'Shape';
            $scope.itemList = data.data;
        });
    }


    $scope.saveItem = function(item) {
        if($stateParams.category === 'icing') {
            if(item._id) {
                AdminFCT.postEditIcing(item).then(function (data) {
                    $scope.itemList = $scope.itemList.filter(function (obj) {
                        if(obj._id !== item._id) return data.data;
                        else return obj;
                    });
                });
            } else {
                AdminFCT.postNewIcing(item).then(function (data) {
                    $scope.itemList.push(data.data); 
                });
            }
        }
        else if($stateParams.category === 'filling') {
            if(item._id) {
                AdminFCT.postEditFilling(item).then(function (data) {
                    $scope.itemList = $scope.itemList.filter(function (obj) {
                        if(obj._id !== item._id) return data.data;
                        else return obj;
                    });
                });
            } else {
                AdminFCT.postNewFilling(item).then(function (data) {
                    $scope.itemList.push(data.data); 
                });
            }
        }
        else if($stateParams.category === 'shape') {
            if(item._id) {
                AdminFCT.postEditShape(item).then(function (data) {
                    $scope.itemList = $scope.itemList.filter(function (obj) {
                        if(obj._id !== item._id) return data.data;
                        else return obj;
                    });
                });
            } else {
                AdminFCT.postNewShape(item).then(function (data) {
                    $scope.itemList.push(data.data); 
                });
            }
        }


        $scope.item = {};
        $scope.newItem = false;
    }
    $scope.deleteItem = function(itemId) {
        if($stateParams.category === 'icing') {
            AdminFCT.deleteIcing(itemId).then(function (data) {
                $scope.itemList = $scope.itemList.filter(function (obj) {
                    if(obj._id !== itemId) return obj;
                });
            });
        }
        else if($stateParams.category === 'filling') {
            AdminFCT.deleteFilling(itemId).then(function (data) {
                $scope.itemList = $scope.itemList.filter(function (obj) {
                    if(obj._id !== itemId) return obj;
                });
            });
        }
        else if($stateParams.category === 'shape') {
            AdminFCT.deleteShape(itemId).then(function (data) {
                $scope.itemList = $scope.itemList.filter(function (obj) {
                    if(obj._id !== itemId) return obj;
                });
            });
        }
    }



    $scope.showEditItem = function(itemId) {
        $scope.newItem = false;
        $scope.activeEditId = itemId;
    }

    $scope.removeForm = function() {
        $scope.newItem = false;
        $scope.activeEditId = '';

    }
});
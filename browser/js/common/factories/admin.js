app.factory('AdminFCT', function ($http) {

//ICING
    var getAllIcing = function() {
        return $http.get('/api/admin/icing', function (data) {
            console.log('Icing DATA', data);
            return data;
        });
    }
    var postNewIcing = function(item) {
        return $http.post('/api/admin/icing/create', item, function (data) {
            console.log('NEW ICING', data);
            return data; 
        });
    }
    var postEditIcing = function(item) {
        var id = item._id;
        delete item._id;
        delete item.__v;
        delete item.reviews;
        return $http.post('/api/admin/icing/'+id, item, function (data) {
            console.log('Edited ICING', data);
            return data; 
        });
    }
    var deleteIcing = function(icingId) {
        return $http.get('/api/admin/icing/delete/'+icingId, function (data) {
            console.log('DELETED ICING', data);
            return data; 
        });
    }


//FILLING
    var getAllFilling = function() {
        return $http.get('/api/admin/filling', function (data) {
            console.log('Filling DATA', data);
            return data;
        });
    }
    var postNewFilling = function(item) {
        return $http.post('/api/admin/filling/create', item, function (data) {
            console.log('NEW ICING', data);
            return data; 
        });
    }
    var postEditFilling = function(item) {
        var id = item._id;
        delete item._id;
        delete item.__v;
        delete item.reviews;
        return $http.post('/api/admin/filling/'+id, item, function (data) {
            console.log('Edited ICING', data);
            return data; 
        });
    }
    var deleteFilling = function(fillingId) {
        return $http.get('/api/admin/filling/delete/'+fillingId, function (data) {
            console.log('DELETED ICING', data);
            return data; 
        });
    }

//SHAPE
    var getAllShape = function() {
        return $http.get('/api/admin/shape', function (data) {
            console.log('Shape DATA', data);
            return data;
        });
    }
    var postNewShape = function(item) {
        return $http.post('/api/admin/shape/create', item, function (data) {
            console.log('NEW ICING', data);
            return data; 
        });
    }
    var postEditShape = function(item) {
        var id = item._id;
        delete item._id;
        delete item.__v;
        delete item.reviews;
        return $http.post('/api/admin/shape/'+id, item, function (data) {
            console.log('Edited ICING', data);
            return data; 
        });
    }
    var deleteShape = function(shapeId) {
        return $http.get('/api/admin/shape/delete/'+shapeId, function (data) {
            console.log('DELETED ICING', data);
            return data; 
        });
    }

//CAKE
    var getAllCake = function() {
        return $http.get('/api/admin/cake', function (data) {
            console.log('Cake DATA', data);
            return data;
        });
    }
    var postNewCake = function(item) {
        return $http.post('/api/admin/cake/create', item, function (data) {
            console.log('NEW ICING', data);
            return data; 
        });
    }
    var postEditCake = function(item) {
        var id = item._id;
        delete item._id;
        delete item.__v;
        delete item.reviews;
        return $http.post('/api/admin/cake/'+id, item, function (data) {
            console.log('Edited ICING', data);
            return data; 
        });
    }
    var deleteCake = function(cakeId) {
        return $http.get('/api/admin/cake/delete/'+cakeId, function (data) {
            console.log('DELETED ICING', data);
            return data; 
        });
    }
    
//
    return {
        getAllIcing: getAllIcing,
        postNewIcing: postNewIcing,
        postEditIcing: postEditIcing,
        deleteIcing: deleteIcing,

        getAllFilling: getAllFilling,
        postNewFilling: postNewFilling,
        postEditFilling: postEditFilling,
        deleteFilling: deleteFilling,

        getAllShape: getAllShape,
        postNewShape: postNewShape,
        postEditShape: postEditShape,
        deleteShape: deleteShape,

        getAllCake: getAllCake,
        postNewCake: postNewCake,
        postEditCake: postEditCake,
        deleteCake: deleteCake
    };

});

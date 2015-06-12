app.factory('AdminFCT', function ($http) {

    var getAllCategory = function(storeId, category) {
        console.log('GETTING ALL')
        return $http.get('/api/store/'+storeId+'/admin/category/'+category, function (data) {
            return data;
        });
    }
    var postNewCategory = function(storeId, category, item) {
        return $http.post('/api/store/'+storeId+'/admin/category/'+category, item, function (data) {
            return data; 
        });
    }
    var postEditCategory = function(storeId, category, item) {
        var id = item._id;
        delete item.__v;
        // delete item._id;
        // delete item.reviews;
        return $http.put('/api/store/'+storeId+'/admin/category/'+category+'/'+id, item, function (data) {
            return data; 
        });
    }
    var deleteCategory = function(storeId, category, itemId) {
        return $http.delete('/api/store/'+storeId+'/admin/category/'+category+'/'+itemId, function (data) {
            return data; 
        });
    }




    var getAllCake = function(storeId) {
        return $http.get('/api/store/'+storeId+'/admin/cake', function (data) {
            return data;
        });
    }
    var postNewCake = function(storeId, item) {
        return $http.post('/api/store/'+storeId+'/admin/cake/create', item, function (data) {
            return data; 
        });
    }
    var postEditCake = function(storeId, item) {
        var id = item._id;
        delete item.__v;
        // delete item._id;
        // delete item.reviews;
        return $http.put('/api/store/'+storeId+'/admin/cake/'+id, item, function (data) {
            return data; 
        });
    }
    var deleteCake = function(storeId, cakeId) {
        return $http.delete('/api/store/'+storeId+'/admin/cake/delete/'+cakeId, function (data) {
            return data; 
        });
    }   





    var getAdminUsers = function(storeId) {
        return $http.get('/api/store/'+storeId+'/admin/users', function (data) {
            return data;
        });
    }

    var removeAdminStatus = function(storeId, userId) {
        return $http.put('/api/store/'+storeId+'/admin/users/'+userId, {admin: false},function (data) {
            return data;
        });
    }

    var searchNonAdminUser = function(storeId, userId) {
        return $http.post('/api/store/'+storeId+'/admin/users/search', {blah:'blah'}, function (data) {
            return data;
        });
    }

    return {

        getAllCategory: getAllCategory,
        postNewCategory: postNewCategory,
        postEditCategory: postEditCategory,
        deleteCategory: deleteCategory,

        getAllCake: getAllCake,
        postNewCake: postNewCake,
        postEditCake: postEditCake,
        deleteCake: deleteCake,

        getAdminUsers: getAdminUsers,
        removeAdminStatus: removeAdminStatus,
        searchNonAdminUser: searchNonAdminUser
    };

});

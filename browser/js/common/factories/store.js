app.factory('StoreFCT', function ($http) {


    var getAll = function() {
        return $http.get('/api/store/', function (data) {
            console.log('CAKE DATA', data);
            return data;
        });
    };

    var getOne = function(cakeId) {
        return $http.get('/api/store/'+cakeId, function (data) {
            console.log('SINGLE DATA', data);
            return data;
        });
    };

    return {
        getAll: getAll,
        getOne: getOne
    };

});

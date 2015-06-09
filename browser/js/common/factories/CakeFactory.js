app.factory('CakeFactory', function ($http) {

    var greetings = [
        'Hello, world!',
        'At long last, I live!',
        'Hello, simple human.',
        'What a beautiful day!',
        'I\'m like any other project, except that I am yours. :)',
        'This empty string is for Lindsay Levine.',
        'こんにちは、ユーザー様。',
        'Welcome. To. WEBSITE.',
        ':D'
    ];

    return {
        getAllIngredients: function () {
            return $http.get('/api/cake_builder', function(err, cakes){
                
            })
    };

});

console.log('loading c_board_factory');
// create the BoardFactory
// console.log('BSModule',BSModule);
BSModule.factory('BoardFactory', function($http) {
    var factory = {};
    var cells = [];
    factory.index = function(callback) {
        console.log("factory.index");
        // Where do we get access to $http?
        $http.get('/boardstate/stevevsmark/1')
        .then(function(output) {
            cells = output.data;
            console.log("output =", output.data);
            callback(cells);
        })
        .catch (function(err) {
            console.log("err =", err );
            callback(err);
        });
    };

    // factory.create = function(data, callback, forErrors) {
    //     console.log("factory.new data:", data);
    //     console.log('the customer name', data);
    //     $http.post('/customers',data)
    //     .then(function(output) {
    //         console.log("get /new response: ", output.data);
    //         callback(output.data);
    //     })
    //     .catch (forErrors);
    // };

    // factory.remove = function(data, callback) {
    //     console.log("factory.remove data:", data);
    //     $http.get('/customers/remove/' + data)
    //     .then(function() {
    //         console.log("remove response");
    //         callback();
    //     })
    //     .catch (function(err){
    //         console.log("err =", err );
    //     });
    // };

    return factory;
});

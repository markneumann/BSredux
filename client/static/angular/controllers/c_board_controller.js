console.log('loading c_board_controller');
//
BSModule.controller('BoardController', function($scope, BoardFactory) {
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.friends array
    $scope.errorArea = {};
    BoardFactory.index(function(data) {
        console.log("CustomerFactory.index", data);
        $scope.cells = data;
        console.log("$scope.cells =", $scope.cells);
        // anything else that you want to happen after storing customers to $scope
    });


    function forErrors(output) {
        console.log('catch --->', output);
        if(output.data.error){  //handle other errors
            //console.log('error = ', output.data.error);
            console.log('error errmsg = ', output.data.error.errmsg);
            $scope.errorArea.errmsg = output.data.error.errmsg;
        }
        if(output.data.errmsg){   //handle not unique
            console.log('errmsg = ', output.data.errmsg);
            $scope.errorArea.errmsg = output.data.error;

        }
    }

});

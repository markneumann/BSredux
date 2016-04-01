

console.log('loading c_board_controller');
//
BSModule.controller('BoardController', function($scope, BoardFactory) {
    //
    $scope.cells =
      [0,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0];
    //$scope.errorArea = {};

    BoardFactory.index(function(data) {
        console.log("BoardFactory.index", data);
        console.log('data =', data);

        //$scope.cells = data;
        //For now, pull the occupant field out and stick it in the arrays.
        for(i=0; i<100; i++) {
            $scope.cells[i]=data[i].occupant;
        }
        console.log("$scope.cells =", $scope.cells);
    });


    // function forErrors(output) {
    //     console.log('catch --->', output);
    //     if(output.data.error){  //handle other errors
    //         //console.log('error = ', output.data.error);
    //         console.log('error errmsg = ', output.data.error.errmsg);
    //         $scope.errorArea.errmsg = output.data.error.errmsg;
    //     }
    //     if(output.data.errmsg){   //handle not unique
    //         console.log('errmsg = ', output.data.errmsg);
    //         $scope.errorArea.errmsg = output.data.error;
    //
    //     }
    // }

});

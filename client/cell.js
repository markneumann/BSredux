var myapp = angular.module('mapApp', []);

myapp.controller('editorController', function ($scope) {

    $scope.cells = [
        []
    ];
    $scope.sizes = [];

    makeSizes();

    $scope.length = $scope.sizes[0];
    $scope.width = $scope.sizes[0];

    $scope.$watch('[width,length]', makeMap, true);

    function makeMap() {
        var cols = $scope.width,
            rows = $scope.length;
		console.log('makeMap');
        $scope.cells = matrix(rows, cols, 'cell');
    }

    function matrix(rows, cols, defaultValue) {
		// code from here http://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
        var arr = [[]];

        // Creates all lines:
        for (var i = 0; i < rows; i++) {

            // Creates an empty line
            arr[i] = [];

            // Adds cols to the empty line:
            arr[i] = new Array(cols);

            for (var j = 0; j < cols; j++) {
                // Initializes:
                arr[i][j] = defaultValue;
            }
        }

        return arr;
    }

    makeMap();

    function makeSizes() {
        for (var i = 0; i < 5; i++) {
            $scope.sizes.push(i + 10);
        }
    }

});

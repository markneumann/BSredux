// BoardState Controller
console.log("loading boardstate_controller");
var mongoose = require('mongoose');
var BoardState = mongoose.model('boardstates');
var catch_errors = function(err){
    res.json({error:err});
};
module.exports = (function() {
    return {
        // User this to return a board for a game
        // Currently, this returns all boards for a game
        // Also to-do, change this to a promise like the other methods
        show:  function(req, res){
            console.log("--> show path, req = ", req.params);
            // search for field combined of username1 + vs + username2 and board num
            console.log('ava =', req.params.ava);
            BoardState.find({"ava": req.params.ava, "whichBoard": req.params.whichBoard}, function(err, theboard) {
                if(err) {
                    console.log(err);
                    //res.render('errors', {title: 'you have errors!', errors: boardstate.err});
                } else {
                    //console.log('boardstate =',theboard);
                    res.json(theboard); //<-- think we change this
                }
            });
        },

        new_board: function(req, res) {
            console.log("--> new board path");
            console.log("req.body =", req.params);
            // request contains the ava and board Number
            // Then do a for loop for 1 to 10 rows
            //    containing a for loop to create 10 cells for the rows
            newAva = req.params.ava;
            newWhichBoard = req.params.whichBoard;
            var x = '';
            var y = '';
            var colVal = ["a","b","c","d","e","f","g","h","i","j"];
            var boardDone = true;
            var breakOut = false;
            for (var row = 0; row<10; row++) {
                x = colVal[row];
                for ( col = 1; col<=10; col++) {
                    y =col;
                    // save the record
                    var newCell = new BoardState({
                        ava:        newAva,
                        whichBoard: newWhichBoard,
                        x:          x,
                        y:          y,
                        occupant:   0
                    });
                    console.log('newCell =', newCell);
                    newCell.save()
                    .then(console.log("==== cell done" + x + ", "+y))
                    .catch(function(err){
                        boardDone = false;
                        breakOut = true;
                    });
                    if (breakOut) break;
                } // end row
            } //end boardDone

            if (boardDone){
                console.log("return 200");
                res.status(200); // send back http 200 status if successful
                res.json({success:'true'});
            } else {
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            }
        },

        //  Edit BoardState updates the occupant value at two times,
        //  When ships are placed on the board (set to ship value), and
        //  When shots are fired (hit or miss)
        //  Requestor should provide the _id of the position
//         edit_boardstate: function(req, res) {
//             console.log("--> edit boardstate path");
//             console.log("req.body =", req.body);
//             var update = {};
//             var pos_id = {_id: req.body.pos_id};
//             console.log('opt_num type=', typeof(req.body.opt_num));
//             var updateStr = '{$inc : {"option'+req.body.opt_num +'count" : 1}}';
//             //update = {$inc : {'option'+req.body.opt _num+'count' : 1 }};
//             console.log('update =', update);
//             console.log('updateStr =', updateStr);
//             console.log('q_id = ',q_id);
//             BoardState.findByIdAndUpdate(q_id,update)
//             .then(function() {
//                 console.log("return 200");
//                 res.status(200); // send back http 200 status if successful
//                 res.json({success:'true'});
//             })
//             .catch (function(err){
//                 console.log(err);
//                 res.status(500); // send back http 200 status if successful
//                 res.json({error: err});
//             });
//         },

//

    };
})(); //returns object

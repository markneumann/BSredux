// BoardState Controller
console.log("loading boardstate_controller");
var mongoose = require('mongoose');
var BoardStates = mongoose.model('boardstates');
var catch_errors = function(err){
    res.json({error:err});
};
module.exports = (function() {
    return {
        show:  function(req, res){
            console.log("--> show path");
            //console.log(req.params);
            // search for field combined of username1 + vs + username2
            //admiralVsadmiral = {"ava": req.params.ava};
            console.log('BoardStateSchema = ', BoardStates);
            console.log('ava =', req.params.ava);
        //    BoardState.find({"ava": req.params.ava}, function(err, theboard) {
            BoardStates.find({}, function(err, theboard) {
                if(err) {
                    console.log(err);
                    //res.render('errors', {title: 'you have errors!', errors: boardstate.err});
                } else {
                    console.log('boardstate =',theboard);
                    res.json(theboard); //<-- think we change this
                }
            });
        },

        // new_board: function(req, res) {
        //     console.log("--> new board path");
        //     console.log("req.body =", req.body);
        //     var newBoard = new BoardState({
        //         ava:     req.body.ava,
        //         whichBoard: req.body.whichBoard,
        //         x:  req.body.x,
        //         y:  req.body.y,
        //         occupant:  req.body.occupant
        //     });
        //     newBoardState.save()
        //     .then(function() {
        //         console.log("return 200");
        //         res.status(200); // send back http 200 status if successful
        //         res.json(newBoardState);
        //     })
        //     .catch (function(err){
        //         console.log(err);
        //         res.status(500); // send back http 200 status if successful
        //         res.json({error: err});
        //     });
        // },

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
// //
//         // remove_question:  function(req, res){
//         //     console.log("--> remove question path");
//         //     console.log(req.params);
//         //     BoardState.remove({_id: req.params.id}, function(err, boardstate) {
//         //         if(err) {
//         //             console.log(err);
//         //             //res.render('errors', {title: 'you have errors!', errors: name.errors});
//         //         } else {
//         //             res.redirect('/boardstate');
//         //         }
//         //     });
//         // },
//

    };
})(); //returns object

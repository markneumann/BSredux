//Board State model to store who current state of game board
console.log("loading board state model");
var mongoose = require('mongoose');
//
var BoardStateSchema = new mongoose.Schema({
    //define schema here
    ava: String,    // admiral1+ 'vs' + admiral2 from login
    whichBoard: Number, // 1 or 2
    x: String,          // a-j
    y: String,          // 1-10
    occupant: Number   // -1=Miss, 0=Empty, 1=Hit, 2=Destoyer,
                       //  3=Cruiser, 4=Battleship, 5=Carrier
}, { timestamps: {createdAt: 'created_at'}
});

//NameSchema.path('name').required(true, 'Name cannot be blank');

mongoose.model('boardstate', BoardStateSchema);

console.log("exit boardstate model");

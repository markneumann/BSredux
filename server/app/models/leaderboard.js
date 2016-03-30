//Leader Board model to store who beat whom when
console.log("loading leaderboard model");
var mongoose = require('mongoose');
//
var LeaderBoardSchema = new mongoose.Schema({
    //define schema here
    winner: String,
    looser: String,
    ships_left: Number
}, { timestamps: {createdAt: 'created_at'}
});

//NameSchema.path('name').required(true, 'Name cannot be blank');

mongoose.model('lb', LeaderBoardSchema);

console.log("exit leaderboard model");

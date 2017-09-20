var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PersonSchema = new Schema({
	fname : String,
	lname : String
});

var usersModel = mongoose.model('users', PersonSchema);

module.exports = usersModel;
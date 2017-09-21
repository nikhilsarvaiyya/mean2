var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ImageSchema = new Schema({
	imageName : String,
	size : String,	
	type : String,	
	lastModified : String,
	date : String	
});

var imageModel = mongoose.model('images', ImageSchema);

module.exports = imageModel;

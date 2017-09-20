'use strict'

const multer  =   require('multer');
const path = require('path');

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now()+''+path.extname(file.originalname));
  }
});
var upload = multer({ storage : storage}).single('userPhoto');


module.exports= {

uploadFile :function(req,res, cb) {
	upload(req,res, function(err) {
        if(err) {
            console.log("Error uploading file.");
        }
        console.log(req.file.originalname)
        
    });
}
	

	
}



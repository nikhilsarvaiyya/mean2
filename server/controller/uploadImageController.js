'use strict'
const imageModel = require('../models/imageModel')
/*const multer  =   require('multer');
const path = require('path');

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now()+''+path.extname(file.originalname));
  }
});
var upload = multer({ storage : storage}).single('userPhoto');*/


module.exports= {

/*uploadFile :function(req,res, cb) {
	upload(req,res, function(err) {
        if(err) {
            console.log("Error uploading file.");
        }
        console.log(req.file.originalname)
        
    });
  }*/


  addImage : function(data, callback){
    
    var img1 = new imageModel(data);
    img1.save(function(err,resource){
      if(err){
        callback(err)
      }
      else
      {
        callback(null,resource)
      }
    })
  },

  getImages : function(callback){
    imageModel.find({}, function(err, data){
      if(err){
        callback(err)
      }
      else
      {
        callback(null,data);
      }

    })  
  }


}



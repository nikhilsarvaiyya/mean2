const express = require('express');
const router = express.Router();
const axios = require('axios'); // declare axios for making http requests

//Models
const usersModel = require('../models/model.js')

var mongoose = require('mongoose'); //Import the mongoose module
var mongoDB = 'mongodb://127.0.0.1/mean2'; //Set up default mongoose connection
mongoose.connect(mongoDB);
var db = mongoose.connection; //Get the default connection
db.on('error', console.error.bind(console, 'MongoDB connection error:')); //Bind connection to error event (to get notification of connection errors)
db.on('open', console.error.bind(console, 'MongoDB connection open :'));


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

/*Get Laa user List*/
router.get('/getAllUser', (req, res) => {
  usersModel.find({}, function(err, data){
    if(err){
      res.status(500).send(error)
    }
    else
    {
      res.status(200).json(data);
    }

  })
});

// Add User
router.post('/addUser', (req, res) => {
  console.log(req.body);

  var user = new usersModel(req.body);
  user.save(function(err,resource){
    if(err){
      res.send(err).status(501);
    }
    else
    {
      console.log(resource);
      res.json(resource).status(201);
    }
  })
});


module.exports = router;
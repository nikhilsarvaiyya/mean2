const express = require('express');
const router = express.Router();
const axios = require('axios'); // declare axios for making http requests

//Models

const userCtrl = require('../controller/userController.js')

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
  userCtrl.getUsers(function(err, data){
    console.log(data);
  })

});

// Add User
router.post('/addUser', (req, res) => {
  userCtrl.postUsers(req.body,function(err, data){
    console.log(data);
  })
});


module.exports = router;
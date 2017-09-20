'use strict'

const usersModel = require('../models/userModel')


module.exports= {

	getUsers : function(callback){
		usersModel.find({}, function(err, data){
			if(err){
				callback(err)
			}
			else
			{
				callback(null,data);
			}

		})	
	},

	postUsers : function(data, callback){
		var user = new usersModel(data);
		user.save(function(err,resource){
			if(err){
				callback(err)
			}
			else
			{
				callback(null,data)
			}
		})
	}
}
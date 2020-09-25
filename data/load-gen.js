var User = require('../models/user');
var Game = require('../models/game');
var mongoose = require('mongoose');
var faker = require('faker');
const dotenv = require('dotenv');
const chalk = require('chalk');
const async = require('async');
var winston = require("winston");

var logger = new (winston.createLogger)({
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({ filename: 'operandprod.log' })
    ]
});
dotenv.config({
    path: '.env.prod'
});

"use strict";

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', () => {
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  logger.log('error','%s MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});

games = [];
const maxUsers = 100000;
var done=0;
var dcnt=0;
for (var i=0; i < maxUsers; i++) {

   var lastnamedelete = faker.name.lastName();
   console.log("Last Name: " + lastnamedelete);
   var filter = {last_name: lastnamedelete};
	var fields = { _id: 1 };
	var options = { limit: 1}
	/* let's get 5 random products to add to the user's purchased array */
	var addr1 = faker.address.streetAddress();
	var city = faker.address.city();
	var state = faker.address.stateAbbr();
	var zipcode = faker.address.zipCode();
	Game.deleteOne(filter, function(err,doc) {
		if (err) {
			console.log("Error: ", err)
		} else {
         console.log(dcnt, " Deleted last name: ", lastnamedelete )
         dcnt += 1;
      }
		
	});
}

function exit() {
	mongoose.disconnect();
	exit;
}

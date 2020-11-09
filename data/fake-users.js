var User = require('../models/user');
var Game = require('../models/game');
var mongoose = require('mongoose');
var faker = require('faker');
const dotenv = require('dotenv');
const chalk = require('chalk');
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
const maxUsers = 20;
var done=0;
// admin = new User({
// 	"email": "admin@admin.com",
// 	"first_name": "Admin",
// 	"last_name": "Istrator",
// 	"role": "admin",
// 	"password": "password",
// 	location: {
// 		type: "Point",
// 		coordinates: [ 39.941022, -75.156809 ]
// 	}
// });
// admin.save(function(err) {
// 	if (err) {
// 		console.log("Error creating administrative user.  " + err.message);
// 		process.abort();
// 	}
// })
for (var i=0; i < maxUsers; i++) {
	var filter = {};
	var fields = { _id: 1 };
	var options = { skip: 10, limit: 10, count: 5 }
	/* let's get 5 random products to add to the user's purchased array */
	var addr1 = faker.address.streetAddress();
	var city = faker.address.city();
	var state = faker.address.stateAbbr();
	var zipcode = faker.address.zipCode();
   var first_name = faker.name.firstName();
   var last_name = faker.name.lastName();	
   var twitter = "https://twitter.com/" + faker.internet.userName(first_name, last_name);
	Game.findRandom(filter, fields, options, function(err,purchasedArray) {
		if (err) {
			console.log(err);
		}
		var items = []
		for(item in purchasedArray) {
			items.push(purchasedArray[item]._id);

		};
//
// This is where we need to tailor the user document to match the schema we created
// and we'll need to modify the model as well.
//
      var first_name = faker.name.firstName();
      var last_name = faker.name.lastName();	
      var twitter = "https://twitter.com/" + faker.internet.userName(first_name, last_name);
		user = new User({
			location: {
				type: 'Point',
				coordinates: [ faker.address.latitude(), faker.address.longitude() ]
			},
			first_name: first_name,
			last_name: last_name,
			email: faker.internet.email(first_name, last_name),
			password: "nopassword",
			addr1: faker.address.streetAddress(),
			city: faker.address.city(),
			state: faker.address.stateAbbr(),
			zipcode: faker.address.zipCode(),
			country: faker.address.country(),
			twitter: twitter,
			telephone: faker.phone.phoneNumber(),
			role: 'visitor',
			acceptedTOS: Date.now(),
			created: Date.now(),
			purchased: items
		},function(err,doc) {
			if (err) {
				console.log('error: ' + err);
			}
		});
		user.save(function(err,newuser) {
			if (err) {
				console.log('error: ',err.message);
			}
			console.log("Items: " + JSON.stringify(items))
			for(item in items) {
				Game.update(
					{ _id: item._id},
					{ $push: { usersBought: newuser._id } }
				);
			};
			done++;
			if (done>=maxUsers) {
				exit();
			}
		});
	});
}

function exit() {
	mongoose.disconnect();
	exit;
}

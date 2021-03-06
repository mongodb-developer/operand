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
const maxUsers = 10000;
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
var rcount = 0;
for (var i=0; i < maxUsers; i++) {
    console.log("User count: " + i);
    rcount += 1;
    if (rcount>8) {
        console.log("Count: " + i)
        var country = "Russia"
        rcount=0
    } else {
        var country = faker.address.country();
    }
	var filter = {};
	var fields = { _id: 1 };
	var options = { skip: 10, limit: 10, count: 5 }
	/* let's get 5 random products to add to the user's purchased array */
	var addr1 = faker.address.streetAddress();
	var city = faker.address.city();
	var state = faker.address.stateAbbr();
	var zipcode = faker.address.zipCode();
	Game.findRandom(filter, fields, options, function(err,purchasedArray) {
		if (err) {
			console.log(err);
		}
		var items = []
		for(item in purchasedArray) {
			items.push(purchasedArray[item]._id);
		};
		user = new User({
			location: {
				type: 'Point',
				coordinates: [ faker.address.latitude(), faker.address.longitude() ]
			},
			first_name: faker.name.firstName(),
			last_name: faker.name.lastName(),
			email: faker.internet.email(),
			password: "nopassword",
			addr1: faker.address.streetAddress(),
			city: faker.address.city(),
			state: faker.address.stateAbbr(),
			zipcode: faker.address.zipCode(),
			country: country,
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

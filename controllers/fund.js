var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var Request = require('../models/Request');
var request = require('request');
var secrets = require('../config/secrets');
var gip = require('geoip-lite');
var requestIP = require('request-ip');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

    /*var ip = reques.headers['x-forwarded-for'] ||
            reques.connection.remoteAddress ||
            reques.socket.remoteAddress ||
            reques.connection.socket.remoteAddress;*/
    

/*function getPos(pos) {
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    console.log(lat + ", " + long);
}*/

/**
 * GET /request
 * request form page.
 */
var findRequests = function(db, callback) {
   var arr = [];
   var cursor =db.collection('requests').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         arr.push(doc);
      } else {
         callback(arr);
      }
   });
};
exports.getFund = function(req, res) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    findRequests(db, function(arr) {
      res.render('fund', {
        title: 'Fund',
        arr: arr
      });
        db.close();
    });
  });
};
  /*var ipMiddleware = function(req1, res1, next1) {
    var clientIp = requestIP.getClientIp(req1); // on localhost > 127.0.0.1 
    next1();
    };
    
  var geo = gip.lookup(ipMiddleware);  
    
  console.log(geo);
  */
  //req.flash('success', {msg: getLocation()});

/**
 * POST /fund
 * Send a fund form via Nodemailer.
 */
//exports.postFund = function(req, res) {
 // var name = req.body.name;
  //var address = req.body.address;
  //var phone = req.body.phone;
  //INSERT THE CODE TO FIND STUFF HERE
  
  //var req = new Fund({
    //name: req.body.name,
    //address: req.body.address,
    //phone: req.body.phone
  //});


 // res.redirect('/fund');
  
//};
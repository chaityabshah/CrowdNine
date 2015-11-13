var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var Request = require('../models/Request');
var secrets = require('../config/secrets');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
var item
/**
 * GET /request
 * request form page.
 */
var findRequests = function(db, callback) {
   var arr = [];
   var cursor =db.collection('requests').find( { "_id": item } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         arr.push(doc);
      } else {
         callback(arr);
      }
   });
};
exports.getBasket = function(req, res) {
  item = req.params.id
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    findRequests(db, function(arr) {
      res.render('basket', {
        title: 'Basket',
        arr: arr
      });
        db.close();
    });
  });
};

/**
 * POST /basket
 * Send a basket form via Nodemailer.
 */
//exports.postBasket = function(req, res) {
 // var name = req.body.name;
  //var address = req.body.address;
  //var phone = req.body.phone;
  //INSERT THE CODE TO FIND STUFF HERE
  
  //var req = new Basket({
    //name: req.body.name,
    //address: req.body.address,
    //phone: req.body.phone
  //});


 // res.redirect('/basket');
  
//};
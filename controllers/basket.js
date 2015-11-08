var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var Request = require('../models/Request');
var secrets = require('../config/secrets');

/**
 * GET /request
 * request form page.
 */
exports.getBasket = function(req, res) {
  res.render('basket', {
    title: 'Basket'
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
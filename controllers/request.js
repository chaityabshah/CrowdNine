var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var Request = require('../models/Request');
var secrets = require('../config/secrets');
var items = ["blah"];
var price = -1;
/**
 * GET /request
 * request form page.
 */
exports.getRequest = function(req, res) {
  res.render('request', {
    title: 'Request',
  });
  if(req.user){
    res.render('request', {
      title: 'Request'
    });
  } else {
    res.redirect('/login');
  }
};

/**
 * POST /request
 * Send a request form via Nodemailer.
 */
exports.postRequest = function(req, res) {
 // var name = req.body.name;
  //var address = req.body.address;
  //var phone = req.body.phone;
  //INSERT THE CODE TO FIND STUFF HERE


  var requestVar = new Request({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    itemList: res.locals.items,
    priceTotal: res.locals.price
  });

  requestVar.save(function(err) {
    if (err) return next(err);
      req.flash('success', { msg: 'Request sent.'});
      res.redirect('/request');
    });
};
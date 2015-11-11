var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var Request = require('../models/Request');
var reques = require('request');
var secrets = require('../config/secrets');
var gip = require('geoip-lite');
var requestIP = require('request-ip');

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
exports.getFund = function(req, res) {
    
  var ipMiddleware = function(req1, res1, next1) {
    var clientIp = requestIP.getClientIp(req1); // on localhost > 127.0.0.1 
    next1();
    };
    
  var geo = gip.lookup(ipMiddleware);  
    
  console.log(geo);
  
  //req.flash('success', {msg: getLocation()});
  res.render('fund', {
    title: 'Fund'
  });
};

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
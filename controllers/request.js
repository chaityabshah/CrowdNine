var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var Request = require('../models/Request');
var request = require('request');
var Promise = require('promise-simple');
var secrets = require('../config/secrets');
/**
 * GET /request
 * request form page.
 */
exports.getRequest = function(req, res) {
  res.render('request', {
    title: 'Request',
  });
};

function nearestPostmates(glat, glng) {
    var cities = [
        {city:"Atlanta",lat:33.748995,lng:-84.387982,dist:0,address:"595 Piedmont Ave NE, Atlanta, GA"},
        {city:"Austin",lat:30.267153,lng:-97.743061,dist:0,address:"1920 East Riverside Drive, Austin, TX"},
        {city:"Baltimore",lat:39.290385,lng:-76.612189,dist:0,address:"1300 E North Ave, Baltimore, MD"},
        {city:"Boston",lat:42.360082,lng:-71.058880,dist:0,address:"24 School St, Boston, MA"},
        {city:"Charlotte",lat:35.227087,lng:-80.843127,dist:0,address:"4701 South Blvd, Charlotte, NC"},
        {city:"Chicago",lat:41.878114,lng:-87.629798,dist:0,address:"111 S Halsted St, Chicago, IL"},
        {city:"Columbus",lat:39.961176,lng:-82.998794,dist:0,address:"410 W 10th Ave #111, Columbus, OH"},
        {city:"Dallas",lat:32.776664,lng:-96.796988,dist:0,address:"2909 Lemmon Ave Ste A, Dallas, TX"},
        {city:"Denver",lat:39.739236,lng:-104.990251,dist:0,address:"1111 S Colorado Blvd, Denver, CO"},
        {city:"Houston",lat:29.760427,lng:-95.369803,dist:0,address:"3317 Montrose Blvd, Houston, TX"},
        {city:"Jersey City",lat:40.728157,lng:-74.077642,dist:0,address:"101-105 Washington St, Hoboken, NJ"},
        {city:"Kansas City",lat:39.099727,lng:-94.578567,dist:0,address:"2301 Holmes St, Kansas City, MO"},
        {city:"Las Vegas",lat:36.169941,lng:-115.139830,dist:0,address:"1101 Las Vegas Blvd S, Las Vegas, NV"},
        {city:"Long Beach",lat:33.770050,lng:-118.193739,dist:0,address:"600 Long Beach Blvd, Long Beach, CA"},
        {city:"Miami",lat:25.761680,lng:-80.191790,dist:0,address:"3103 Biscayne Blvd, Miami, FL"},
        {city:"Milwaukee",lat:43.038902,lng:-87.906474,dist:0,address:"826 N Plankinton Ave Ste 100, Milwaukee, WI"},
        {city:"Minneapolis",lat:44.977753,lng:-93.265011,dist:0,address:"655 Nicollet Mall, Minneapolis, MN"},
        {city:"Nashville",lat:36.162664,lng:-86.781602,dist:0,address:"3901 Hillsboro Pike, Nashville, TN"},
        {city:"New York City",lat:40.712784,lng:-74.005941,dist:0,address:"1471 Broadway, New York, NY"},
        {city:"Oklahoma City",lat:35.467560,lng:-97.516428,dist:0,address:"2345 N Classen Blvd, Oklahoma City, OK"},
        {city:"Palm Springs",lat:33.830296,lng:-116.545292,dist:0,address:"1700 E Vista Chino, Palm Springs, CA"},
        {city:"Philadelphia",lat:39.952584,lng:-75.165222,dist:0,address:"1 S Broad St, Philadelphia, PA"},
        {city:"Phoenix",lat:33.448377,lng:-112.074037,dist:0,address:"3402 N Central Ave, Phoenix, AZ"},
        {city:"Portland",lat:45.523062,lng:-122.676482,dist:0,address:"1620 NE Grand Ave, Portland, OR"},
        {city:"Sacramento",lat:38.581572,lng:-121.494400,dist:0,address:"840 El Camino Ave, Sacramento, CA"},
        {city:"San Antonio",lat:29.424122,lng:-98.493628,dist:0,address:"6901 San Pedro Ave, San Antonio, TX"},
        {city:"SF Peninsula",lat:37.710666,lng:-122.399423,dist:0,address:"1130 Bird Ave, San Jose, CA"},
        {city:"St. Louis",lat:38.627003,lng:-90.199404,dist:0,address:"4218 Lindell Blvd, St Louis, MO"},
        {city:"Virginia Beach",lat:36.852926,lng:-75.977985,dist:0,address:"2400 Atlantic Ave, Virginia Beach, VA"},
        {city:"Washington D.C.",lat:38.907192,lng:-77.036871,dist:0,address:"801 7th St NW, Washington, DC"}];
    
        for(i = 0; i < cities.length; i++) {
            cities[i].dist = Math.sqrt(Math.pow(glat - cities[i].lat, 2) + Math.pow(glng - cities[i].lng, 2));
        }
        
        cities.sort(compare);
        
        return cities[0].address;
}

function compare(a,b) {
    return a.dist - b.dist;
}

/**
 * POST /request
 * Send a request form via Nodemailer.
 */
function flash(req, res) {
    req.flash('errors', { msg: "Please enter a valid address."});
    res.redirect('/request');
}
exports.postRequest = function(req, res) {
 // var name = req.body.name;
  //var address = req.body.address;
  //var phone = req.body.phone;
  //INSERT THE CODE TO FIND STUFF HERE
  if(req.body.arr.length != 0) {
    var newArr = JSON.parse(req.body.arr);
  } else {
    var newArr = [];
  }
<<<<<<< HEAD
  var newArr1 = [];
  for(var i = 0; i < newArr.length; i++) {
    if(newArr[i] != null) {
        newArr1.push(newArr[i]);
    }
  }
=======
>>>>>>> a8cbef810a43d95a41163e8a69101976fb07ca44
  if(req.body.price == 0) {
    var newPrice = "0.00";
  } else {
    var newPrice = req.body.price;
  }
  var combined = req.body.street + "+" + req.body.city + "+" + req.body.state;
  req.assert('street', 'Street is empty.').notEmpty();
  req.assert('city', 'City is empty.').notEmpty();
  req.assert('state', 'State must be 2 letters.').len(2, 2);
  req.assert('phone', 'Phone number is invalid.').isMobilePhone("en-US");
  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/request');
  }
  var requestVar = new Request({
    name: req.body.name,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    phone: req.body.phone,
    priceTotal: newPrice,
<<<<<<< HEAD
    itemList: newArr1
=======
    itemList: newArr
>>>>>>> a8cbef810a43d95a41163e8a69101976fb07ca44
  });

  requestVar.save(function(err) {
    if (err) return next(err);
        geocodeLoc(combined).then(function(result){
            latlng = result;
            var nearest = nearestPostmates(result.lat, result.lng);
            if(req.body.state != nearest.slice(-2)) {
                req.flash('errors', { msg: "Nearest store not within state."});
                res.redirect('/request');
            } else {
                req.flash('success', { msg: "Request sent."});
                res.redirect('/request');
            }
        });
    });
    var latlng;


  
  var geocodeLoc = function(adr) {
    var result;
    
    var d = Promise.defer();
    var requestStart = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    var APIkey = "&key=AIzaSyDSxfQbMazAVi5f6sa_6u2U0g8XXqIv9lk";

    var baseURL = requestStart.concat(adr).concat(APIkey);
    
    
    //var baseURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address;
    request(baseURL, function(e, r, b){
        if(JSON.parse(b)["results"].length == 0) {
            d.resolve(e);
        } else {
            if(!e && r.statusCode === 200){
            result = (JSON.parse(b).results[0].geometry.location);
            d.resolve(result);
            }else{
                d.reject(e);
            }
        }
        
    });
    return d;
};
};
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var mongoose = require('mongoose');

var requestSchema = new mongoose.Schema({

  name: String,
  street: String,
  city: String,
  state: String,
  phone: String,
  store: String,
  itemList: Array,
  priceTotal: String
});

/**
 * Password hash middleware.
 */

/**
 * Helper method for validating user's password.
 */

/**
 * Helper method for getting user's gravatar.
 */
module.exports = mongoose.model('Request', requestSchema);

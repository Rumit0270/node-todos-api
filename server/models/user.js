var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    minlength: 1,
    trim: true,
    required: true
  }
});


var User = mongoose.model('User', UserSchema);

module.exports = {User};

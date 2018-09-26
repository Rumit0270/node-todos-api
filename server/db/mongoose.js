var mongoose = require('mongoose');

// instruct mongoose to use the default Promise
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};

var mongoose = require('mongoose');

// instruct mongoose to use the default Promise
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
module.exports = {mongoose};

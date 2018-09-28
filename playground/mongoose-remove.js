const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany()
// Todo.deleteMany({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove().then((doc) => {
//   console.log(doc);
// });

Todo.findByIdAndRemove('5badd96c5b010caa3e4d8fab').then((doc) => {
  console.log(doc);
});

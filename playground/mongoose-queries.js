const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5babc234a4028d20040d9819';
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });
//
// if(!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }
//
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id: ', todo);
// }).catch((e) => {
//   console.log(e);
// });


var userId = '5bab56b5d428ce2924608c0d';
User.findById(userId).then((user) => {
  if(!user) {
    return console.log('user not found');
  }
  console.log('User with given id: ', user);
}).catch((err) => {
    console.log(err);
});

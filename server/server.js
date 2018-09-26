var express = require('express');
// bodyParser is used to convert JSON in JS object
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  //console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});


app.listen(3000, () => {
  console.log('Server running at port 3000');
});

module.exports = {app};


























// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (err) => {
//     console.log('Unable to save todo');
// });

// var anotherTodo = new Todo({
//   text: 'Finish assignments',
//   completed: false,
//   completedAt: 12
// });
//
// anotherTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (err) => {
//     console.log('Unable to save todo');
// });

//
// var otherTodo = new Todo({});
// otherTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (err) => {
//     console.log('Unable to save todo');
// });

// var user1 = new User({
//   email: 'user1@example.com'
// });
//
//  user1.save().then((doc) => {
//   console.log('Saved user', doc);
// }, (err) => {
//     console.log('Unable to save user');
// });

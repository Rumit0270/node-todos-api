var express = require('express');
// bodyParser is used to convert JSON in JS object
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// post a todo
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

// get all the todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(err);
  })
})

// GET /todos/{id}
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send({});
  }

  Todo.findById(id).then((todo) => {
    if(!todo) {
      return res.status(404).send()
    }
    return res.send({todo});
  }, (err) => {
    res.status(400).send();
  });
});


app.listen(port, () => {
  console.log(`Server running at port ${port}`);
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

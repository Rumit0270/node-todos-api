require('./config/config');

const _ = require('lodash');
const express = require('express');
// bodyParser is used to convert JSON in JS object
const  bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const bcrypt = require('bcryptjs');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());


// post a todo
app.post('/todos', authenticate, (req, res) => {
  //console.log(req.body);
  var todo = new Todo({
    text: req.body.text,
    _creator: req.user._id
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

// get all the todos
app.get('/todos', authenticate, (req, res) => {
  Todo.find({
    _creator: req.user.id}
  ).then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(err);
  })
})

// GET /todos/{id}
app.get('/todos/:id', authenticate, (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send({});
  }

  Todo.findOne({
    _id: id,
    _creator: req.user._id
  }).then((todo) => {
    if(!todo) {
      return res.status(404).send()
    }
    return res.send({todo});
  }, (err) => {
    res.status(400).send();
  });
});


app.delete('/todos/:id', authenticate, (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send({});
  }

  Todo.findOneAndRemove({
    _id: id,
    _creator: req.user._id
  }).then((todo) => {
      if(!todo) {
        return res.status(404).send()
      }
      return res.send({todo});
  }, (err) => {
    res.status(400).send();
  });

});

app.patch('/todos/:id', authenticate, (req,res) => {
  var id = req.params.id;

  // ensure only required property aree updated
  var body = _.pick(req.body, ['text', 'completed']);

  if(!ObjectID.isValid(id)) {
    return res.status(404).send({});
  }

  if(_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
      body.completed = false;
      body.completedAt = null;
  }

  Todo.findOneAndUpdate({_id: id, _creator: req.user._id}, {$set: body}, {new: true}).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });

});

//POST /users
//signup
app.post('/users', (req,res) => {

  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((err) => {
    res.status(400).send(err);
  });

});



app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});


//POST /users/login
app.post('/users/login',  (req, res) =>  {
  let email = req.body.email;
  let password = req.body.password;


  User.findByCredintials(email, password).then((user) => {
    return user.generateAuthToken().then((token) => {
        res.header('x-auth', token).send(user);
    });

  }).catch((err) => {
    res.status(400).send();
  });

  // User.findOne({email}).then((user) => {
  //   bcrypt.compare(password, user.password, (err, result) => {
  //     if(result) {
  //       res.header('x-auth', user.tokens[0].token).send(user);
  //     } else {
  //         res.status(401).send();
  //     }
  //   })
  // }).catch((err) => {
  //   res.status(400).send();
  // });

});

// route for logout
app.delete('/users/me/token', authenticate, (req, res) => {
  req.user.removeToken(req.token).then(() => {
    res.status(200).send();
  }, () => {
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

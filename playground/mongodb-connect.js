//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

//ES6 syntax for object destructiring
// var user = {
//   name: 'Mottu',
//   age: 10
// };
//
// var {name} = user;
// console.log(name);



// Connection url
const url = 'mongodb://localhost:27017';
// database name
const dbName = 'TodoApp';


// use connect method to connect to the server
MongoClient.connect(url, (err, client) => {
  if(err) {
     return console.log('Unable to connect to MongoDb server');
  }

  console.log('Connected to MongoDb server');

  const db = client.db(dbName);

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Rumit ',
  //   age: 22,
  //   location: 'Kathmandu'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });


  client.close();

});

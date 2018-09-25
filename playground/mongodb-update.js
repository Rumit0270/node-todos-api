//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

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

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5baa0894543b5a13ad76f588')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5ba87e48148f5a153d995af6")
  }, {
    $set: {
      name: 'Rumit'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  //client.close();

});

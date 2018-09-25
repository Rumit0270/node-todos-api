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
  var collection = db.collection('Todos');

  //deleteMany
  // collection.deleteMany({text: 'Finish assignments'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // collection.deleteOne({text: 'Finish assignments'}).then((result) => {
  //   console.log(result);
  // });


  //findOneAndDelete

  // collection.findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection('Users').deleteMany({name: 'Test'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5ba8f8ef0ad6563c31f16c70')}).then((result) => {
    console.log(result);
  });





  //client.close();

});

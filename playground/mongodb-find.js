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

  // db.collection('Todos').find({
  //   _id: new ObjectID('5ba87daf49aeae151e787675')
  // }).toArray().then((docs) => {
  //   console.log('Todos: ');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log(`Unable to fetch todos ${err}`);
  // });


  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos count: ' + count);
  // }, (err) => {
  //   console.log(`Unable to fetch todos ${err}`);
  // });

  var collection = db.collection('Users');
  collection.find({name: 'Mike'}).toArray().then((docs) => {
    console.log('Documents with name mike are: ');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(`Unable to retrieve document`);
  });

  client.close();

});

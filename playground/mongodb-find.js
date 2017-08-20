 const {MongoClient, ObjectID} = require('mongodb');
 
  MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
     if(err){
         return console.log('Unable to connect to MongoDB server.');
     }    
     console.log('Connected to MongoDB server.')

     //find() returns a cursor
     
     //Fetch all documents find() - no argument
     //db.collection('Todos').find().toArray().then((docs) => {

     //Querying by incomplete todos
     //db.collection('Todos').find({completed: false}).toArray().then((docs) => {

     //Querying by _id - IDs are not strings, you need to provide an instance of ObjectID
     /* db.collection('Todos').find({
         _id: new ObjectID('5999cbe7b5569224d2e422a8')
        }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 4));
     }, (err) => {
         console.log('Unable to fetech todos', err);
     }); */

    /*  db.collection('Todos').find().count().then((count) => {
       console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetech todos', err);
    }); */

    db.collection('Users').find({name: 'Fred Silva'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 4));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });
     
     //db.close();
  });
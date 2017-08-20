/**
 * Mongo Client lets you connect to the database
 */

 /*
 ES6 - Object destructuring

 var user = {name: 'Juliano', age: 34};
 var {name} = user;
 console.log(name);
 */
 //const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }    
    console.log('Connected to MongoDB server.')

    /* db.collection('Todos').insertOne({
        text: 'Do a PWC in the fish aquarium',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 4));
    }); */

    /**
     * Inser a new document into Users (name, age, location)
     */
    /* db.collection('Users').insertOne({
        name: 'Fred Silva',
        age: 30,
        location: 'Brazil'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert user', err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 4));
    }); */
    
    db.close();
 });
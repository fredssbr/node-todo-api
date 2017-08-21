 const {MongoClient, ObjectID} = require('mongodb');
 
  MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
     if(err){
         return console.log('Unable to connect to MongoDB server.');
     }    
     console.log('Connected to MongoDB server.');

     db.collection('Todos').findOneAndUpdate({
         _id: new ObjectID('599a24db8a5d310af13e8280')
     },{
         $set: {
             completed: true
         }
     },{
         returnOriginal: false
     }).then((result) => {
         console.log(result);
     });

     db.collection('Users').findOneAndUpdate({
         name: 'John Nails'
     },{
         $set:{
             name: 'Daenaerys Targaryen The Unburnt'
         },
         $inc:{
             age: 1
         }
     },{
         returnOriginal: false
     }).then((result) => {
        console.log('My updated user:')
        console.log(JSON.stringify(result, undefined, 4));
     });

     //db.close();
  });
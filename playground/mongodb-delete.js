 const {MongoClient, ObjectID} = require('mongodb');
 
  MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
     if(err){
         return console.log('Unable to connect to MongoDB server.');
     }    
     console.log('Connected to MongoDB server.');

     //deleteMany
     /* db.collection('Todos').deleteMany({text: 'Do calisthenics'}).then((result) => {
         console.log(result);
     }); */

     //deleteOne
     /* db.collection('Todos').deleteOne({text: 'Do calisthenics'}).then((result) => {
        console.log(result);
     }); */

     //findOneAndDelete
     /* db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
     }); */

     db.collection('Users').deleteMany({name: 'Fred Silva'}).then((result) => {
         console.log(result);
     });

     db.collection('Users').findOneAndDelete({_id: new ObjectID('5999ce7818f2fb26a3d387f5')}).then((result) => {
        console.log(result);
     });
     
     //db.close();
  });
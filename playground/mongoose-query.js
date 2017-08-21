const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

/*
var id = '599b4e2d1b953c32a4cdfbe1';

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}

 Todo.find({
    //Mongoose converts it to ObjectID
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
}); 

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todo by id', todo);
}).catch((e) => console.log(e));
*/

var id = "599b262188fe2e3ea0a968b3";

User.findById(id).then((user) => {
    if(!user){
        return console.log('Unable to find user');
    }
    console.log('User by id', user);
}, (e) => console.log(e));
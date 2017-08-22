const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

//delete muliple records .remove({})

/* Todo.remove({}).then((result) => {
    console.log(result);
});
*/
/* Todo.findOneAndRemove({_id: '599c98f884670d806bedb567'}).then((result) => {
});  */

Todo.findByIdAndRemove('599c98f884670d806bedb567').then((todo) => {
    console.log(todo);
});
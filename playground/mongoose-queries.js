const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


var id = '5aabeb6e1f8b0d77177ba4df11';

if(!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

// User.find({
//     _id: id
// }).then((user) => {
//     console.log('User', user);
// }).catch((e) => console.log(e));

// User.findOne({
//     _id: id
// }).then((user) => {
//     console.log('User', user);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if(!user) {
        return console.log('Unable to find user');
    }
    console.log('User', user);
}).catch((e) => console.log(e));
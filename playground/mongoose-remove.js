const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '5aad6c041c4b4942a00a02fa'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5aad6c041c4b4942a00a02fa').then((todo) => {
    if(!todo) {
        return console.log('No todo removed');
    }
    console.log('Todo removed', todo)
});
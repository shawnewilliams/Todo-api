// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// ES 6 Object destructuring:
// var user = {name: 'Shawn', age: 38};
// var {name} = user;
// console.log(name) ==> 'Shawn'

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Shawn',
    //     age: 38,
    //     location: 'Seattle'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert User', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});

// MongoDB module v3

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//     if(err) {
//         return console.log('Unable to connect to MongoDB server');
//     }
//     console.log('Connected to MongoDB server');
//     const db = client.db('TodoApp');

//     db.collection('Todos').insertOne({
//         text: 'Something to do',
//         completed: false
//     }, (err, result) => {
//         if (err) {
//             return console.log('Unable to insert todo', err);
//         }

//         console.log(JSON.stringify(result.ops, undefined, 2));
//     });

//     client.close();
// });
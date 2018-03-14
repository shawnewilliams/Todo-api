// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5aa93f9dcbe2847922e584a0')
    // }).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(docs);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // });

    db.collection('Users').find({name: "Shawn"}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err)
    });

    // db.close();
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
const mongoose = require('mongoose');

// connect to db

mongoose.connect('mongodb://localhost/todo_list_db');

// acquire to connection(to check if it is successfull)
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'error connecting to db'));

// up and running print this message
db.once('open', function() {
    console.log('Successfully connected to the database');
})
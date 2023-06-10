const mongoose = require('mongoose');

mongoose.set('strictQuery',true);
mongoose.connect('mongodb://127.0.0.1:27017/todoapp');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in connecting to mongoDB"));

db.once('open', function(){
    console.log('Connected to database :: MongoDB');
});

module.exports = db;
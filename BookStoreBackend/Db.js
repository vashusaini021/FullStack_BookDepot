const mongoose = require("mongoose")
require('dotenv').config()

// const uri = "mongodb://localhost:27017/books_depot";
const uri = process.env.DB_URL;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));


connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

module.exports = connection;
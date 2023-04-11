const port = process.env.port || 3000;
const express = require("express");
const bodyParser = require("body-parser")
const cors = require('cors');

const db = require("./Db")
const books = require('./MockData/books.json');
const BookModel = require("./ModelSchema/BookModel");
const bookRoute = require("./Services/BooksServices")
const userRoute = require("./Services/UserSevices")
const cartRoute = require("./Services/CartServices")


app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const allowedOrigins = ["https://book-depot-eta.vercel.app", "http://localhost:3000"];

// app.use(cors({
//     origin: allowedOrigins
// }));
app.use(cors());


db.once('open', async () => {
    try {
        await BookModel.Book.deleteMany({});
        console.log('All data deleted successfully!');
        await BookModel.Book.insertMany(books["books"]);
        console.log('Data inserted successfully!');
    } catch (err) {
        console.log("Error: " + err);
    } finally {
        // db.close();
    }
});

app.use('/books', bookRoute);
app.use('/user', userRoute);
app.use('/cart', cartRoute);

app.listen(port, ()=> {
    console.log("server running on 3000");
});
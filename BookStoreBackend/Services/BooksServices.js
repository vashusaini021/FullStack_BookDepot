const bookRouter = require("express").Router();
const db = require("../Db")
const BookModel = require("../ModelSchema/BookModel");

//http://localhost:3000/books/
bookRouter.route("/").get((req, res) => {
    BookModel.Book.find()
        .then((books) => res.json(books))
        .catch((err) => res.status(400).json("Error: " + err));
});

//http://localhost:3000/books/6422c460d386a575c9dad6d8
bookRouter.route("/:id").get((req, res) => {
    BookModel.Book.findById(req.params.id)
        .then((books) => res.json(books))
        .catch((err) => res.status(400).json("Error: " + err));
});

//http://localhost:3000/books/title/The%20Great%20Gatsby
bookRouter.route("/title/:title").get((req, res) => {
    const searchTitle = req.params.title;
    const regex = new RegExp(searchTitle, "i");
    BookModel.Book.find({ title: regex })
        .then((books) => res.json(books))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = bookRouter;

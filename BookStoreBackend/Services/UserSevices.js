const userRouter = require("express").Router();
const db = require("../Db")
httpStatus = require("http-status-codes");


let BookModel = require("../ModelSchema/BookModel");
let User = require("../ModelSchema/UserModel");
let Cart = require("../ModelSchema/CartModel");
const { ObjectId } = require('mongodb');


// REQUEST
// {
//     "email": "vasu",
//     "password": "2123"
// }
userRouter.route("/signup").post(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new User({
        email,
        password
    });

    try {
        const savedUser = await newUser.save();
        console.log("User Created");

        const email = savedUser.email;
        const userId = savedUser._id;
        let cartid = "";

        const newcart = new Cart({
            userId
        });

        const savedCart = await newcart.save();
        console.log("Cart Created successfully");
        cartid = savedCart._id;

        res.status(httpStatus.StatusCodes.OK).json({
            "UserAdded": {
                "email": email,
                "userId": userId,
                "cartId": cartid
            }
        });
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});


// REQUEST
// {
//     "userId": "6422c460d386a575c9dad6d8",
//      "bookId": "6422c451d386a575c9dad54d"
// }
userRouter.route("/addBook").post(async (req, res) => {
    const userId = req.body.userId;
    const bookId = req.body.bookId;
    console.log("vasu");

    try {
        const book_m = await BookModel.Book.findById(new ObjectId(bookId));
        console.log("Book find", book_m);
        const cart = await Cart.findOne({ "userId" : userId});
        console.log("Cart find", cart);

        if (cart.books == null) {
            console.log("cart is not intialised till now");
            cart.books = [{ book: book_m, quantity: 1}]
        } else {

            const existingBookIndex = cart.books.findIndex(
                (cartBook) => cartBook.book._id.toString() === book_m._id.toString()
            );

            if (existingBookIndex === -1) {
                console.log("No existing book");
                cart.books.push({ book: book_m, quantity: 1 })
            } else {
                console.log("Existing book");
                cart.books[existingBookIndex].quantity += 1;
            }
        }

        const savedCart = await cart.save()
        console.log("Book Added");

        res.status(httpStatus.StatusCodes.OK).json({
            "Userbooks": {
                "userId": userId,
                "books": savedCart.books
            }
        });
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});


// REQUEST
// {
//     "email": "vasu",
//     "password": "2123"
// 
userRouter.route("/signin").post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then((user) => res.json({ "msg": "Logge In Successfull", "status": httpStatus.StatusCodes.OK}))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = userRouter;

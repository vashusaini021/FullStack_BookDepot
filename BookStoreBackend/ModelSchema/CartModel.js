const mongoose = require("mongoose");
const BookModel = require("./BookModel");

const CartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    books: {
        type: [BookModel.bookSchema],
        default: [],
        required: true,
    }
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
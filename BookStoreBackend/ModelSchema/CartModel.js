const mongoose = require("mongoose");
const BookModel = require("./BookModel");

const CartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    books: [{
        book: {
            type: BookModel.bookSchema,
            required: true,
        },
        quantity: {
            type: Number,
            default: 1,
            required: true
        }
    }]
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
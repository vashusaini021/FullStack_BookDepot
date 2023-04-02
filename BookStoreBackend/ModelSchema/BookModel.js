const mongoose = require("mongoose")


const bookSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: false
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    isBestSeller: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: false
    },
    pageCount: {
        type: Number,
        required: false
    },
    publishedDate: {
        type: Date,
        required: false
    },
    thumbnailUrl: {
        type: String,
        required: false
    },
    shortDescription: {
        type: String,
        required: false
    },
    longDescription: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    authors: {
        type: [String],
        required: false
    },
    categories: {
        type: [String],
        required: false
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = { Book, bookSchema };

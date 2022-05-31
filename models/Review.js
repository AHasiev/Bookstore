const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    text: String,
    nameReview: String,
    bookReview: String,
})

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
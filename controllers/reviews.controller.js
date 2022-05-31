const mongoose = require("mongoose");
const Review = require("../models/Review");

module.exports.reviewsController = {
   patchReview:(req, res) => {
       Review.findByIdUpdate({
        text: req.body.text,
        nameReview: req.body.nameReview,
        bookReview: req.body.bookReview, 
       }).then((data) => {
           res.json(data);
       });
   },

   deleteReview: (req, res) => {
       Review.findByIdDelete(req. params).then(() => {
           res.json("Рецензия удалена")
       });
   },

   getReview: (req, res) => {
       Review.findById(req.param.id)
       .then((data) => {
           res.json(data)
       });
   },
};
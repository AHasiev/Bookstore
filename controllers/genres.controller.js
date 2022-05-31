const mongoose = require("mongoose");
const Genre = require("../models/Genre");

module.exports.genresController = {
  getGenre: (req, res) => {
    Genre.findById(req.params.id).then((data) => {
      res.json(data);
    });
  },

  postGenre: (req, res) => {
    Genre.create({
      nameGenre: req.body.nameGenre,
      description: req.body.description,
    }).then((data) => {
      res.json(data);
    });
  },

  deleteGenre: (req, res) => {
    Genre.findByAndDelete(req.params).then(() => {
      res.json("Жанр удален");
    });
  },

  getBook: (req, res) => {
    Book.find().then((data) => {
      res.json;
    });
  },
};

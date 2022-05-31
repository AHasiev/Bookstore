const Book = require("../models/Book");

module.exports.bookController = {
  postBook: (req, res) => {
    Book: create({
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
    }).then((data) => {
      res.json(data);
    });
  },

  deleteBook: (req, res) => {
    Book.findByIdAndDelete(req.params.id).then((data) => {
      res.json("Книга удалена");
    });
  },

  patchBook: (req, res) => {
    Book.findByIdAndUpdate(req.params.id, {$set: {
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
    }}).then((data) => {
      res.json(data);
    });
  },

  getBook: (req, res) => {
    Book.find()
      .populate("author")
      .populate("genre")
      .then((data) => res.json(data));
  },
};

const mongoose = require("mongoose")

const authorSchema = mongoose.Schema ({
    nameAuthor: String,
    aboutAuthor: String,
});

const Author = mongoose.model("Author", authorSchema);
const { Router } = require("express");
const { genresController } = require("../controllers/genres.controller");

const router = Router();

router.get("/genres/:id", genresController.getGenre);
router.post("/genres", genresController.postGenre);
router.delete("/genres", genresController.deleteGenre);
router.get("/genres", genresController.getGenre);


module.exports = router;
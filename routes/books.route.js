const { Router } = require("express");
const { bookController } = require("../controllers/books.controller");

const router = Router();

router.post("/book", bookController.postBook);
router.delete("/book", bookController.deleteBook);
router.patch("/book", bookController.patchBook);
router.get("/book", bookController.getBook);

module.exports = router;
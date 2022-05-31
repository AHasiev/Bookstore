const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();
router.patch("/review", reviewsController.patchReview);
router.delete("/review", reviewsController.deleteReview);
router.get("/review", reviewsController.getReview);

module.exports = router;
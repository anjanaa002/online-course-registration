const router = require("express").Router();
const { enroll, myCourses } = require("../controllers/enrollController");
const { protect } = require("../middleware/authMiddleware");
router.post("/", protect, enroll);
router.get("/my", protect, myCourses);

module.exports = router;
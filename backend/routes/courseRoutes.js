// const router = require("express").Router();
// const { getCourses, addCourse } = require("../controllers/courseController");
// router.get("/", getCourses);
// router.post("/", addCourse);
// module.exports = router;

const router = require("express").Router();
const { getCourses, addCourse,updateCourse, deleteCourse } = require("../controllers/courseController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/", getCourses); // public
router.post("/", protect, adminOnly, addCourse); // admin only
router.put("/:id", protect, adminOnly, updateCourse);
router.delete("/:id", protect, adminOnly, deleteCourse);

module.exports = router;

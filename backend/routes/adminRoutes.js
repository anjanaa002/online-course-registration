// // const router = require("express").Router();
// // const { viewUsersWithCourses } = require("../controllers/adminController");
// // const { protect, adminOnly } = require("../middleware/authMiddleware");

// // router.get("/users", protect, adminOnly, viewUsersWithCourses);

// // module.exports = router;

// const router = require("express").Router();
// const User = require("../models/User");
// const { protect, adminOnly } = require("../middleware/authMiddleware");

// router.get("/users-with-courses", protect, adminOnly, async (req, res) => {
//   const users = await User.find({ role: "user" })
//     .populate("courses", "title");

//   res.json(users);
// });

// module.exports = router;

const router = require("express").Router();
const User = require("../models/User");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// router.get("/users-with-courses", protect, adminOnly, async (req, res) => {
//   try {
//     const users = await User.find({ role: "user" })
//       .select("firstName lastName email courses") // select only needed fields
//       .populate("courses", "title"); // only populate course title

//     res.json(users);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error" });
//   }
// });

router.get("/users-with-courses", protect, adminOnly, async (req, res) => {
  try {
    const users = await User.find({ role: "user" })
      .select("firstName lastName email phone courses")   // ✅ added phone
      .populate("courses", "title price");                // ✅ added price

    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

router.delete("/users/:id", protect, adminOnly, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json({ msg: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
module.exports = router;


// const router = require("express").Router();
// const { register, login } = require("../controllers/authController");
// const { protect } = require("../middleware/authMiddleware");
// const { updateProfile } = require("../controllers/authController");
// const User = require("../models/User");
// const authMiddleware = require("../middleware/authMiddleware");

// router.post("/register", register);
// router.post("/login", login);
// router.get("/profile", protect, async (req, res) => {
//   const user = await User.findById(req.user.id).select("-password");
//   res.json(user);
// });
// router.put("/profile", authMiddleware, updateProfile);

// module.exports = router;


const router = require("express").Router();
const { register, login, updateProfile } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const User = require("../models/User");

router.post("/register", register);
router.post("/login", login);

router.get("/profile", protect, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

// ✅ FIX HERE — use protect
router.put("/profile", protect, updateProfile);

module.exports = router;
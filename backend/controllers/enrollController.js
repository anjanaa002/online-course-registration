// const Enrollment = require("../models/Enrollment");

// exports.enroll = async (req, res) => {
//   await Enrollment.create(req.body);
//   res.json({ msg: "Enrollment successful" });
// };

// exports.myCourses = async (req, res) => {
//   const data = await Enrollment.find({ userId: req.params.id })
//     .populate("courseId");
//   res.json(data);
// };
const User = require("../models/User");
const Course = require("../models/Course");

// exports.enroll = async (req, res) => {
//   const { courseId } = req.body;

//   const user = await User.findById(req.user.id);

//   if (user.courses.includes(courseId)) {
//     return res.status(400).json({ msg: "Already enrolled" });
//   }

//   user.courses.push(courseId);
//   await user.save();

//   res.json({ msg: "Enrolled successfully" });
// };
// exports.enroll = async (req, res) => {
//   try {
//     console.log("Enroll API HIT");
// console.log("CourseId received:", req.body.courseId);
//     const { courseId } = req.body;

//     const user = await User.findById(req.user.id);

//     if (!user) {
//       return res.status(404).json({ msg: "User not found" });
//     }

//     // 🔥 Important fix for ObjectId comparison
//     const alreadyEnrolled = user.courses.some(
//       (id) => id.toString() === courseId
//     );

//     if (alreadyEnrolled) {
//       return res.status(400).json({ msg: "Already enrolled" });
//     }

//     user.courses.push(courseId);
//     await user.save();

//     console.log("Updated courses:", user.courses);

//     res.json({ msg: "Enrolled successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error" });
//   }
// };

exports.enroll = async (req, res) => {
  try {
    const { courseId } = req.body;

    if (!courseId) {
      return res.status(400).json({ msg: "Course ID missing" });
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // ✅ If courses array doesn't exist, initialize it
    if (!user.courses) {
      user.courses = [];
    }

    // ✅ STRONG duplicate check
    if (user.courses.includes(courseId)) {
      return res.status(400).json({ msg: "Already enrolled" });
    }

    user.courses.push(courseId);
    await user.save();

    res.json({ msg: "Enrolled successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.myCourses = async (req, res) => {
  const user = await User.findById(req.user.id).populate("courses");
  res.json(user.courses);
};

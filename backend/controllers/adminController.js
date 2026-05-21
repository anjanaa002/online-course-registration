// // // const User = require("../models/User");

// // // exports.viewUsersWithCourses = async (req, res) => {
// // //   const users = await User.find({ role: "user" })
// // //     .populate("courses");

// // //   res.json(users);
// // // };

// // const User = require("../models/User");

// // exports.viewUsersWithCourses = async (req, res) => {
// //   try {
// //     const users = await User.find({ role: "user" })
// //       .select("firstName lastName email courses") // make sure these fields are returned
// //       .populate("courses", "title"); // only get course title

// //     res.json(users);
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ msg: "Server Error" });
// //   }
// // };


// // const User = require("../models/User");

// // exports.viewUsersWithCourses = async (req, res) => {
// //   try {
// //     const users = await User.find({ role: "user" })
// //       .select("_id firstName lastName email phone courses") // ✅ include user id + phone
// //       .populate({
// //         path: "courses",
// //         select: "_id title price" // ✅ include course reg id + price
// //       });

// //     res.json(users);
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ msg: "Server Error" });
// //   }
// // };

// // const User = require("../models/User");

// // exports.viewUsersWithCourses = async (req, res) => {
// //   try {
// //     const users = await User.find({ role: "user" })
// //       .populate("courses");

// //     const formattedUsers = users.map(user => ({
// //       _id: user._id,
// //       firstName: user.firstName,
// //       lastName: user.lastName,
// //       email: user.email,
// //       phone: user.phone ? user.phone : "Not Available",

// //       courses: user.courses.map(course => ({
// //         _id: course._id,
// //         title: course.title,
// //         price: course.price ? course.price : 0
// //       }))
// //     }));

// //     res.json(formattedUsers);

// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ msg: "Server Error" });
// //   }
// // };

// const User = require("../models/User");

// exports.viewUsersWithCourses = async (req, res) => {
//   try {
//     const users = await User.find({ role: "user" })
//       .populate({
//         path: "courses",
//         select: "title price duration instructor"
//       });

//     res.json(users);

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server Error" });
//   }
// };

const User = require("../models/User");

exports.viewUsersWithCourses = async (req, res) => {
  try {
    const users = await User.find({ role: "user" })
      .populate({
        path: "courses",
        select: "title price duration instructor"
      });

    console.log("USERS SENT TO FRONTEND:", JSON.stringify(users, null, 2));

    res.json(users);

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};
// const Course = require("../models/Course");

// exports.getCourses = async (req, res) => {
//   res.json(await Course.find());
// };

// exports.addCourse = async (req, res) => {
//   res.json(await Course.create(req.body));
// };
const Course = require("../models/Course");

/* Get all courses (public) */
exports.getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

/* Add course (admin only) */
// exports.addCourse = async (req, res) => {
//   const { title, description, price, duration,
//       instructorName,
//       qualification} = req.body;

//   const course = await Course.create({
//     title,
//     description,
//     price,
//      duration,
//       instructor: {
//         name: instructorName,
//         qualification: qualification
//       }
//   });

//   res.json(course);
// };

// exports.addCourse = async (req, res) => {
//   // console.log(req.body);
//   try {
//     const {
      
//       title,
//       description,
//       price,
//       duration,
//       instructorName,
//       qualification
//     } = req.body;

//     // ✅ Backend validation
//     if (!title || !description || !price || !duration || !instructorName || !qualification) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const course = await Course.create({
//       title,
//       description,
//       price,
//       duration,
//       instructor: {
//         name: instructorName,
//         qualification: qualification
//       }
//     });

//     res.status(201).json(course);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };


exports.addCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      duration,
      instructorName,
      qualification
    } = req.body;

    if (!title || !description || !price || !duration || !instructorName || !qualification) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const newCourse = new Course({
      title,
      description,
      price: Number(price), // ensure number
      duration,
      instructor: {
        name: instructorName,
        qualification: qualification
      }
    });

    await newCourse.save();

    res.status(201).json(newCourse);

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

/* Update course (admin only) */
exports.updateCourse = async (req, res) => {
  const updated = await Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
};

/* Delete course (admin only) */
// exports.deleteCourse = async (req, res) => {
//   await Course.findByIdAndDelete(req.params.id);
//   res.json({ msg: "Course deleted" });
// };


exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ msg: "Course not found" });
    }

    await Course.findByIdAndDelete(req.params.id);

    res.json({ msg: "Course deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

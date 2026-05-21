// // // // const router = require("express").Router();
// // // // const { createPayment } = require("../controllers/paymentController");
// // // // router.post("/", createPayment);
// // // // module.exports = router;
// // // import express from "express";
// // // import Stripe from "stripe";
// // // import dotenv from "dotenv";
// // // import Course from "../models/Course.js";
// // // dotenv.config();

// // // const router = express.Router();
// // // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// // // // router.post("/create-checkout-session", async (req, res) => {
// // // //   try {
// // // //     const { course } = req.body;

// // // //     const session = await stripe.checkout.sessions.create({
// // // //       payment_method_types: ["card"],
// // // //       mode: "payment",
// // // //       line_items: [
// // // //         {
// // // //           price_data: {
// // // //             currency: "inr",
// // // //             product_data: {
// // // //               name: course.title,
// // // //             },
// // // //             unit_amount: course.price * 100, // convert to paisa
// // // //           },
// // // //           quantity: 1,
// // // //         },
// // // //       ],
// // // //       success_url: "http://localhost:5173/payment-success",
// // // //       cancel_url: "http://localhost:5173/payment-cancel",
// // // //     });

// // // //     res.json({ id: session.id });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).json({ error: "Payment failed" });
// // // //   }
// // // // });


// // // router.post("/create-checkout-session", async (req, res) => {
// // //   try {
// // //     const { courseId } = req.body;

// // //     const course = await Course.findById(courseId);

// // //     if (!course) {
// // //       return res.status(404).json({ message: "Course not found" });
// // //     }

// // //     const session = await stripe.checkout.sessions.create({
// // //       payment_method_types: ["card"],
// // //       mode: "payment",
// // //       line_items: [
// // //         {
// // //           price_data: {
// // //             currency: "inr",
// // //             product_data: {
// // //               name: course.title,
// // //             },
// // //             unit_amount: course.price * 100,
// // //           },
// // //           quantity: 1,
// // //         },
// // //       ],
// // //       success_url: `http://localhost:5173/payment-success?courseId=${course._id}`,
// // //       cancel_url: `http://localhost:5173/courses`,
// // //     });

// // //     res.json({ id: session.id });
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).json({ error: "Payment failed" });
// // //   }
// // // });

// // // export default router;

// // const express = require("express");
// // const Stripe = require("stripe");
// // const Course = require("../models/Course");

// // const router = express.Router();

// // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// // router.post("/create-checkout-session", async (req, res) => {
// //   try {
// //     const { courseId } = req.body;

// //     const course = await Course.findById(courseId);

// //     if (!course) {
// //       return res.status(404).json({ message: "Course not found" });
// //     }

// //     const session = await stripe.checkout.sessions.create({
// //       payment_method_types: ["card"],
// //       mode: "payment",
// //       line_items: [
// //         {
// //           price_data: {
// //             currency: "inr",
// //             product_data: {
// //               name: course.title,
// //             },
// //             unit_amount: course.price * 100,
// //           },
// //           quantity: 1,
// //         },
// //       ],
// //       success_url: `http://localhost:5173/payment-success?courseId=${course._id}`,
// //       cancel_url: `http://localhost:5173/courses`,
// //     });

// //     // res.json({ id: session.id });
// //     res.json({ url: session.url });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: "Payment failed" });
// //   }
// // });

// // module.exports = router;
// const express = require("express");
// const Stripe = require("stripe");
// const Course = require("../models/Course");

// const router = express.Router();
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// router.post("/create-checkout-session", async (req, res) => {
//   try {
//     const { courseId } = req.body;

//     const course = await Course.findById(courseId);
//     if (!course) {
//       return res.status(404).json({ message: "Course not found" });
//     }

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: [
//         {
//           price_data: {
//             currency: "inr",
//             product_data: {
//               name: course.title,
//             },
//             unit_amount: course.price * 100,
//           },
//           quantity: 1,
//         },
//       ],
//       // success_url: `http://localhost:5173/payment-success?courseId=${course._id}`,
//       success_url: `http://localhost:5173/user/payment-success?courseId=${course._id}`,
//       cancel_url: `http://localhost:5173/courses`,
//     });

//     res.json({ url: session.url });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Payment failed" });
//   }
// });

// module.exports = router;

const express = require("express");
const Stripe = require("stripe");
const Course = require("../models/Course");
const User = require("../models/User");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();
const FRONTEND_URL = "https://online-course-registration-lime.vercel.app";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session", protect, async (req, res) => {
  try {
    const { courseId } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const user = await User.findById(req.user.id);

    // ✅ CHECK IF ALREADY ENROLLED (THIS WAS MISSING)
    if (user.courses.includes(courseId)) {
      return res.status(400).json({ message: "Already enrolled" });
    }

    // ✅ Only create Stripe session if not enrolled
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: course.title,
            },
            unit_amount: course.price * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `${FRONTEND_URL}/user/payment-success?courseId=${course._id}`,
      cancel_url: `${FRONTEND_URL}/courses`,
    });

    res.json({ url: session.url });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Payment failed" });
  }
});

module.exports = router;
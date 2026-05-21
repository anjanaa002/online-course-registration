// // // const jwt = require("jsonwebtoken");

// // // exports.protect = (req, res, next) => {
// // //   let token;

// // //   // Token comes from Authorization header
// // //   if (
// // //     req.headers.authorization &&
// // //     req.headers.authorization.startsWith("Bearer")
// // //   ) {
// // //     token = req.headers.authorization.split(" ")[1];
// // //   }

// // //   if (!token) {
// // //     return res.status(401).json({ msg: "Not authorized, no token" });
// // //   }

// // //   try {
// // //     const decoded = jwt.verify(token, process.env.JWT_SECRET);

// // //     req.user = decoded; // { id, role }
// // //     next();
// // //   } catch (err) {
// // //     res.status(401).json({ msg: "Token invalid" });
// // //   }
// // // };
// // // exports.adminOnly = (req, res, next) => {
// // //   if (req.user.role !== "admin") {
// // //     return res.status(403).json({ msg: "Admin access only" });
// // //   }
// // //   next();
// // // };


// // const jwt = require("jsonwebtoken");
// // const User = require("../models/User");

// // exports.protect = async (req, res, next) => {
// //   let token = req.headers.authorization?.split(" ")[1];

// //   if (!token) return res.status(401).json({ msg: "No token" });

// //   const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //   req.user = await User.findById(decoded.id).select("-password");
// //   next();
// // };

// // exports.adminOnly = (req, res, next) => {
// //   if (req.user.role !== "admin") {
// //     return res.status(403).json({ msg: "Admin only" });
// //   }
// //   next();
// // };

// exports.protect = (req, res, next) => {
//   const auth = req.headers.authorization;

//   if (!auth || !auth.startsWith("Bearer"))
//     return res.status(401).json({ msg: "No token" });

//   try {
//     const token = auth.split(" ")[1];
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch {
//     res.status(401).json({ msg: "Invalid token" });
//   }
// };

// exports.adminOnly = (req, res, next) => {
//   if (req.user.role !== "admin") {
//     return res.status(403).json({ msg: "Admins only" });
//   }
//   next();
// };

const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token provided" });
  }

  try {
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // IMPORTANT: fetch full user from DB
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ msg: "User not found" });
    }

    req.user = user; // now includes role
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};

exports.adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ msg: "Admin access only" });
  }
  next();
};


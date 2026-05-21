// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// exports.register = async (req, res) => {
//   const hashed = await bcrypt.hash(req.body.password, 10);
//   const user = await User.create({ ...req.body, password: hashed });
//   res.json(user);
// };

// exports.login = async (req, res) => {
//   const user = await User.findOne({ email: req.body.email });
//   if (!user || !(await bcrypt.compare(req.body.password, user.password)))
//     return res.status(401).json({ msg: "Invalid credentials" });

//   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//   res.json({ token, user });
// };

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// exports.register = async (req, res) => {
//   const hashed = await bcrypt.hash(req.body.password, 10);

//   const user = await User.create({
//     name: req.body.name,
//     email: req.body.email,
//     password: hashed,
//     role: req.body.role || "user"
//   });

//   res.json(user);
// };

exports.register = async (req, res) => {
  const { firstName, lastName, email, phone, password, role } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    // Generate token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(201).json({ user: newUser, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
// exports.login = async (req, res) => {
//   const { email, password, role } = req.body;

//   const user = await User.findOne({ email, role });
//   if (!user) {
//     return res.status(401).json({ msg: "Invalid role or email" });
//   }

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     return res.status(401).json({ msg: "Invalid password" });
//   }

//   const token = jwt.sign(
//     { id: user._id, role: user.role },
//     process.env.JWT_SECRET
//   );

//   res.json({ token, user });
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ msg: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id,role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

//     res.json({ user, token }); // important: return both user and token
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error" });
//   }
// };
 // send user object + token
  //   res.json({
  //     user: {
  //       _id: user._id,
  //       firstName: user.firstName,
  //       lastName: user.lastName,
  //       email: user.email,
  //       role: user.role
  //     },
  //     token
  //   });
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({ msg: "Server error" });
  // }};

  exports.login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).json({ msg: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ msg: "Invalid email or password" });

    // ✅ ROLE CHECK HERE (CRITICAL)
    if (role && user.role !== role) {
      return res.status(403).json({ msg: "Unauthorized role access" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
console.log(user);
    res.json({
      token,
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
exports.updateProfile = async (req, res) => {
  try {
    const { firstName, lastName, phone } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        firstName,
        lastName,
        phone
      },
      { new: true }
    );

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      phone: updatedUser.phone,
      email: updatedUser.email,
      role: updatedUser.role
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Profile update failed" });
  }
};
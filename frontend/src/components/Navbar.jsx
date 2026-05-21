// // import { Link } from "react-router-dom";

// // export default function Navbar() {
// //   return (
// //     <nav style={styles.nav}>
// //       <h2 style={styles.logo}>OnlineCourses</h2>

// //       <div style={styles.links}>
// //         <Link to="/" style={styles.link}>Home</Link>
// //         <Link to="/" style={styles.link}>Courses</Link>
// //         <Link to="/my-courses" style={styles.link}>My Courses</Link>
// //         <Link to="/about" style={styles.link}>About</Link>
// //         <Link to="/login" style={styles.link}>Login</Link>
// //       </div>
// //     </nav>
// //   );
// // }

// // const styles = {
// //   nav: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     padding: "15px 30px",
// //     backgroundColor: "#1e293b",
// //     color: "white"
// //   },
// //   logo: {
// //     margin: 0
// //   },
// //   links: {
// //     display: "flex",
// //     gap: "20px"
// //   },
// //   link: {
// //     color: "white",
// //     textDecoration: "none",
// //     fontWeight: "bold"
// //   }
// // };
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = ({ setUser }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/");
//   };

//   return (
//     <nav className="bg-blue-600 text-white p-4 flex justify-between">
//       <div className="font-bold text-xl">CourseHub</div>
//       <div className="space-x-4">
//         <Link to="/courses">Courses</Link>
//         <Link to="/mycourses">My Courses</Link>
//         <Link to="/update-profile">Update Profile</Link>
//         <button onClick={handleLogout} className="bg-red-500 px-2 py-1 rounded">
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        CourseHub
      </div>
      <div className="navbar-links">
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </nav>
  );
}

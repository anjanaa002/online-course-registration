// // // // // // AdminNavbar.jsx
// // // // // import { useNavigate } from "react-router-dom";

// // // // // export default function AdminNavbar() {
// // // // //   const navigate = useNavigate();

// // // // //   const handleLogout = () => {
// // // // //     localStorage.clear();
// // // // //     navigate("/login");
// // // // //   };

// // // // //   return (
// // // // //     <nav
// // // // //       style={{
// // // // //         display: "flex",
// // // // //         justifyContent: "space-around",
// // // // //         padding: "15px 0",
// // // // //         backgroundColor: "#16a34a",
// // // // //         color: "white",
// // // // //         fontWeight: "bold",
// // // // //       }}
// // // // //     >
// // // // //       <span style={navItemStyle} onClick={() => navigate("/viewusers")}>
// // // // //         View Users & Courses
// // // // //       </span>
// // // // //       <span style={navItemStyle} onClick={() => navigate("/addcourse")}>
// // // // //         Add Course
// // // // //       </span>
// // // // //       <span style={navItemStyle} onClick={() => navigate("/editcourse")}>
// // // // //         Edit Course
// // // // //       </span>
// // // // //       <span style={navItemStyle} onClick={() => navigate("/deletecourse")}>
// // // // //         Delete Course
// // // // //       </span>
// // // // //       <span style={navItemStyle} onClick={handleLogout}>
// // // // //         Logout
// // // // //       </span>
// // // // //     </nav>
// // // // //   );
// // // // // }

// // // // // const navItemStyle = {
// // // // //   cursor: "pointer",
// // // // // };


// // // // import { useNavigate } from "react-router-dom";

// // // // export default function AdminNavbar() {
// // // //   const navigate = useNavigate();

// // // //   const handleLogout = () => {
// // // //     localStorage.clear();
// // // //     navigate("/adminlogin");
// // // //   };

// // // //   return (
// // // //     <nav style={{
// // // //       display: "flex",
// // // //       justifyContent: "space-around",
// // // //       padding: "15px 0",
// // // //       backgroundColor: "#16a34a",
// // // //       color: "white",
// // // //       fontWeight: "bold"
// // // //     }}>
// // // //       <span style={navItemStyle} onClick={() => navigate("/admin/viewusers")}>
// // // //         View Users & Courses
// // // //       </span>
// // // //       <span style={navItemStyle} onClick={() => navigate("/admin/addcourse")}>
// // // //         Add Course
// // // //       </span>
// // // //       <span style={navItemStyle} onClick={() => navigate("/admin/editcourse")}>
// // // //         Edit Course
// // // //       </span>
// // // //       <span style={navItemStyle} onClick={() => navigate("/admin/deletecourse")}>
// // // //         Delete Course
// // // //       </span>
// // // //       <span style={navItemStyle} onClick={handleLogout}>
// // // //         Logout
// // // //       </span>
// // // //     </nav>
// // // //   );
// // // // }

// // // // const navItemStyle = {
// // // //   cursor: "pointer",
// // // // };


// // // import { useNavigate } from "react-router-dom";

// // // export default function AdminNavbar() {
// // //   const navigate = useNavigate();

// // //   const handleLogout = () => {
// // //     localStorage.clear();
// // //     navigate("/login");
// // //   };

// // //   return (
// // //     <nav style={{
// // //       display: "flex",
// // //       justifyContent: "space-around",
// // //       padding: "15px 0",
// // //       backgroundColor: "#16a34a",
// // //       color: "white",
// // //       fontWeight: "bold"
// // //     }}>
// // //       <span onClick={() => navigate("/admin-dashboard/view-users")}>
// // //         View Users & Courses
// // //       </span>
// // //       <span onClick={() => navigate("/admin-dashboard/add-course")}>
// // //         Add Course
// // //       </span>
// // //       <span onClick={() => navigate("/admin-dashboard/edit-course")}>
// // //         Edit Course
// // //       </span>
// // //       <span onClick={() => navigate("/admin-dashboard/delete-course")}>
// // //         Delete Course
// // //       </span>
// // //       <span onClick={handleLogout}>
// // //         Logout
// // //       </span>
// // //     </nav>
// // //   );
// // // }
// // import { NavLink, useNavigate } from "react-router-dom";

// // export default function AdminNavbar() {
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     navigate("/login");
// //   };

// //   const linkStyle = ({ isActive }) => ({
// //     color: "white",
// //     textDecoration: "none",
// //     padding: "10px 15px",
// //     borderRadius: "6px",
// //     backgroundColor: isActive ? "#15803d" : "transparent",
// //     cursor: "pointer"
// //   });

// //   return (
// //     <nav
// //       style={{
// //         display: "flex",
// //         justifyContent: "space-around",
// //         alignItems: "center",
// //         padding: "15px",
// //         backgroundColor: "#16a34a"
// //       }}
// //     >
// //       <NavLink to="view-users" style={linkStyle}>
// //         View Users & Courses
// //       </NavLink>

// //       <NavLink to="add-course" style={linkStyle}>
// //         Add Course
// //       </NavLink>

// //       <NavLink to="edit-course" style={linkStyle}>
// //         Edit Course
// //       </NavLink>

// //       <NavLink to="delete-course" style={linkStyle}>
// //         Delete Course
// //       </NavLink>

// //       <span onClick={handleLogout} style={{ cursor: "pointer" }}>
// //         Logout
// //       </span>
// //     </nav>
// //   );
// // }


// import { useNavigate } from "react-router-dom";

// export default function AdminNavbar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <nav style={navStyle}>
//       <span onClick={() => navigate("/admin-dashboard/view-users")}>
//         View Users & Courses
//       </span>
//       <span onClick={() => navigate("/admin-dashboard/view-courses")}>
//         View All Courses
//       </span>
//       <span onClick={() => navigate("/admin-dashboard/add-course")}>
//         Add Course
//       </span>
//       <span onClick={() => navigate("/admin-dashboard/edit-course")}>
//         Edit Course
//       </span>
//       <span onClick={handleLogout}>Logout</span>
//     </nav>
//   );
// }

// const navStyle = {
//   display: "flex",
//   justifyContent: "space-around",
//   padding: "15px",
//   backgroundColor: "#1d16a3",
//   color: "white",
//   fontWeight: "bold",
//   cursor: "pointer"
// };


import { useNavigate, useLocation } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    // background: "linear-gradient(135deg, #1d16a3, #4f46e5)",
    background: "#0c085c",
    color: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  };

  const logoStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const linksStyle = {
    display: "flex",
    gap: "20px",
  };

  const itemStyle = (active) => ({
    cursor: "pointer",
    color: active ? "#8492c7" : "white",
    fontWeight: active ? "600" : "normal",
    transition: "0.3s",
  });

  const logoutStyle = {
    cursor: "pointer",
    color: "#f6eeee",
  };

  return (
    <nav style={navStyle}>
      {/* 🔹 Logo */}
      <div style={logoStyle}>Admin Panel</div>

      {/* 🔹 Links */}
      <div style={linksStyle}>
        <span
          style={itemStyle(isActive("/admin-dashboard/view-users"))}
          onClick={() => navigate("/admin-dashboard/view-users")}
        >
          Users
        </span>

        <span
          style={itemStyle(isActive("/admin-dashboard/view-courses"))}
          onClick={() => navigate("/admin-dashboard/view-courses")}
        >
          Courses
        </span>

        <span
          style={itemStyle(isActive("/admin-dashboard/add-course"))}
          onClick={() => navigate("/admin-dashboard/add-course")}
        >
          Add
        </span>

        <span
          style={itemStyle(isActive("/admin-dashboard/edit-course"))}
          onClick={() => navigate("/admin-dashboard/edit-course")}
        >
          Edit
        </span>

        <span style={logoutStyle} onClick={handleLogout}>
          Logout
        </span>
      </div>
    </nav>
  );
}
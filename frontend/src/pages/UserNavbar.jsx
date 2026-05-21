// // UserNavbar.jsx
// import { useNavigate } from "react-router-dom";

// export default function UserNavbar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <nav
//       style={{
//         display: "flex",
//         justifyContent: "space-around",
//         padding: "15px 0",
//         backgroundColor: "#120f4c",
//         color: "white",
//         fontWeight: "bold",
//       }}
//     >
//       <span style={navItemStyle} onClick={() => navigate("/user/courses")}>
//         Courses
//       </span>
//       <span style={navItemStyle} onClick={() => navigate("/user/my-courses")}>
//         My Courses
//       </span>
//       <span style={navItemStyle} onClick={() => navigate("/user/my-profile")}>
//         My Profile
//       </span>
//       <span style={navItemStyle} onClick={handleLogout}>
//         Logout
//       </span>
//     </nav>
//   );
// }

// const navItemStyle = {
//   cursor: "pointer",
// };


import { useNavigate, useLocation } from "react-router-dom";

export default function UserNavbar() {
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
    // background: "linear-gradient(135deg, #120f4c, #4f46e5)",
    background: "#120f4c",
    color: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  };

  const logoStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const linksStyle = {
    display: "flex",
    gap: "25px",
  };

  // const itemStyle = (active) => ({
  //   cursor: "pointer",
  //   paddingBottom: "3px",
  //   borderBottom: active ? "2px solid white" : "none",
  //   transition: "0.3s",
  // });
  const itemStyle = (active) => ({
  cursor: "pointer",
  color: active ? "#576ab5" : "white",  // ✅ color change
  fontWeight: active ? "600" : "normal",
  transition: "0.3s",
});

  const logoutStyle = {
    cursor: "pointer",
    color: "#fdf2f2",
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>CourseHub</div>

      <div style={linksStyle}>
        <span
          style={itemStyle(isActive("/user/courses"))}
          onClick={() => navigate("/user/courses")}
        >
          Courses
        </span>

        <span
          style={itemStyle(isActive("/user/my-courses"))}
          onClick={() => navigate("/user/my-courses")}
        >
          My Courses
        </span>

        <span
          style={itemStyle(isActive("/user/my-profile"))}
          onClick={() => navigate("/user/my-profile")}
        >
          My Profile
        </span>

        <span style={logoutStyle} onClick={handleLogout}>
          Logout
        </span>
      </div>
    </nav>
  );
}
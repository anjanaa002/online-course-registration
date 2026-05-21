// UserDashboard.jsx
import UserNavbar from "./UserNavbar";
import { Outlet } from "react-router-dom"; // for nested routes

export default function UserDashboard() {
  return (
    <div>
      <UserNavbar />
      <div style={{ padding: "20px" }}>
        <Outlet /> {/* This will render Courses, MyCourses, MyProfile */}
      </div>
    </div>
  );
}

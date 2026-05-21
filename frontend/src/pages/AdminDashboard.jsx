// AdminDashboard.jsx
import AdminNavbar from "./AdminNavbar";
import { Outlet } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div>
      <AdminNavbar />
      <div style={{ padding: "20px" }}>
        <Outlet /> {/* This will render Add/Edit/Delete Course, View Users */}
      </div>
    </div>
  );
}

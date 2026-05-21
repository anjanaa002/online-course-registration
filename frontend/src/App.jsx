

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";

import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import Courses from "./pages/Courses";
import MyCourses from "./pages/MyCourses";
import Profile from "./pages/Profile";
import PaymentSuccess from "./pages/PaymentSuccess";

import ViewCourses from "./pages/admin/ViewCourses";
import ViewUsers from "./pages/admin/ViewUsers";
import AddCourse from "./pages/admin/AddCourse";
import EditCourse from "./pages/admin/EditCourse";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* USER PROTECTED */}
        <Route element={<ProtectedRoute allowedRole="user" />}>
          <Route path="/user" element={<UserDashboard />}>
            <Route path="courses" element={<Courses />} />
            <Route path="my-courses" element={<MyCourses />} />
            <Route path="my-profile" element={<Profile />} />
            {/* <Route path="success" element={<PaymentSuccess />} /> */}
            <Route path="payment-success" element={<PaymentSuccess />} />
          </Route>
        </Route>

        {/* ADMIN PROTECTED */}
        <Route element={<ProtectedRoute allowedRole="admin" />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />}>
            <Route path="view-courses" element={<ViewCourses />} />
            <Route path="view-users" element={<ViewUsers />} />
            <Route path="add-course" element={<AddCourse />} />
            <Route path="edit-course" element={<EditCourse />} />
          </Route>
        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

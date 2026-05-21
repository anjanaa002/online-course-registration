// // // import { Navigate, Outlet } from "react-router-dom";

// // // export default function ProtectedRoute({ allowedRole }) {
// // //   const user = JSON.parse(localStorage.getItem("user"));

// // //   if (!user) {
// // //     return <Navigate to="/login" />;
// // //   }

// // //   if (allowedRole && user.role !== allowedRole) {
// // //     return <Navigate to="/login" />;
// // //   }

// // //   return <Outlet />;
// // // }


// // import { Navigate, Outlet } from "react-router-dom";

// // export default function ProtectedRoute({ allowedRole }) {
// //   const user = JSON.parse(localStorage.getItem("user"));

// //   if (!user) return <Navigate to="/login" />;
// //   if (allowedRole && user.role !== allowedRole) return <Navigate to="/login" />;

// //   return <Outlet />;
// // }


// import { Navigate, Outlet } from "react-router-dom";

// export default function ProtectedRoute({ allowedRole }) {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const token = localStorage.getItem("token");

//   if (!user || !token) {
//     return <Navigate to="/login" replace />;
//   }

//   if (allowedRole && user.role !== allowedRole) {
//     return <Navigate to="/login" replace />;
//   }

//   return <Outlet />;
// }

import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ allowedRole }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  console.log("ProtectedRoute check:");
  console.log("Token:", token);
  console.log("User:", user);

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
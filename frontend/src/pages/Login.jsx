// // // // // // // import api from "../services/api";

// // // // // // // export default function Login() {
// // // // // // //   const login = async () => {
// // // // // // //     const res = await api.post("/auth/login", {
// // // // // // //       email: "test@gmail.com",
// // // // // // //       password: "123456"
// // // // // // //     });
// // // // // // //     localStorage.setItem("user", JSON.stringify(res.data.user));
// // // // // // //   };
// // // // // // //   return <button onClick={login}>Login</button>;
// // // // // // // }


// // // // // // import { useState } from "react";
// // // // // // import api from "../services/api";
// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // export default function Login() {
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const navigate = useNavigate();

// // // // // //   const login = async (role) => {
// // // // // //     try {
// // // // // //       const res = await api.post("/auth/login", {
// // // // // //         email,
// // // // // //         password,
// // // // // //         role
// // // // // //       });

// // // // // //       localStorage.setItem("token", res.data.token);
// // // // // //       localStorage.setItem("user", JSON.stringify(res.data.user));

// // // // // //       if (role === "admin") navigate("/admin");
// // // // // //       else navigate("/");
// // // // // //     } catch (err) {
// // // // // //       alert("Login failed");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h2>Login</h2>

// // // // // //       <input
// // // // // //         placeholder="Email"
// // // // // //         value={email}
// // // // // //         onChange={e => setEmail(e.target.value)}
// // // // // //       />

// // // // // //       <input
// // // // // //         placeholder="Password"
// // // // // //         type="password"
// // // // // //         value={password}
// // // // // //         onChange={e => setPassword(e.target.value)}
// // // // // //       />

// // // // // //       <br /><br />

// // // // // //       <button onClick={() => login("user")}>
// // // // // //         Login as User
// // // // // //       </button>

// // // // // //       <button onClick={() => login("admin")}>
// // // // // //         Login as Admin
// // // // // //       </button>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // import { useState } from "react";
// // // // // import UserLogin from "./UserLogin";
// // // // // import AdminLogin from "./AdminLogin";

// // // // // export default function Login() {
// // // // //   const [role, setRole] = useState(null); // "user" or "admin"

// // // // //   if (!role) {
// // // // //     // Show buttons to choose login type
// // // // //     return (
// // // // //       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
// // // // //         <h1 className="text-4xl font-bold mb-6">Login</h1>
// // // // //         <div className="space-x-4">
// // // // //           <button
// // // // //             onClick={() => setRole("user")}
// // // // //             className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
// // // // //           >
// // // // //             User Login
// // // // //           </button>
// // // // //           <button
// // // // //             onClick={() => setRole("admin")}
// // // // //             className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
// // // // //           >
// // // // //             Admin Login
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   // Show login form based on selected role
// // // // //   return (
// // // // //     <div>
// // // // //       {role === "user" ? <UserLogin /> : <AdminLogin />}
// // // // //       <div className="mt-4 text-center">
// // // // //         <button
// // // // //           onClick={() => setRole(null)}
// // // // //           className="text-blue-600 underline"
// // // // //         >
// // // // //           Go Back
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import { useState } from "react";
// // // // import UserLogin from "./UserLogin";
// // // // import AdminLogin from "./AdminLogin";

// // // // export default function Login() {
// // // //   const [role, setRole] = useState(null); // "user" or "admin"

// // // //   return (
// // // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 px-4">
      
// // // //       {/* Card */}
// // // //       <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-8">
        
// // // //         {/* Heading */}
// // // //         <div className="text-center mb-6">
// // // //           <h1 className="text-3xl font-bold text-gray-800">
// // // //             Welcome Back 👋
// // // //           </h1>
// // // //           <p className="text-gray-500 mt-2">
// // // //             Login to continue to CourseHub
// // // //           </p>
// // // //         </div>

// // // //         {/* Role selection */}
// // // //         {!role && (
// // // //           <div className="flex flex-col items-center gap-4">
// // // //             <button
// // // //               onClick={() => setRole("user")}
// // // //               className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
// // // //             >
// // // //               Login as User
// // // //             </button>

// // // //             <button
// // // //               onClick={() => setRole("admin")}
// // // //               className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
// // // //             >
// // // //               Login as Admin
// // // //             </button>
// // // //           </div>
// // // //         )}

// // // //         {/* Login forms */}
// // // //         {role && (
// // // //           <div className="flex flex-col items-center">
// // // //             <div className="w-full">
// // // //               {role === "user" ? <UserLogin /> : <AdminLogin />}
// // // //             </div>

// // // //             <button
// // // //               onClick={() => setRole(null)}
// // // //               className="mt-6 text-blue-600 font-medium hover:underline"
// // // //             >
// // // //               ← Go Back
// // // //             </button>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import { useState } from "react";
// // // import UserLogin from "./UserLogin";
// // // import AdminLogin from "./AdminLogin";

// // // export default function Login() {
// // //   const [role, setRole] = useState(null);

// // //   if (!role) {
// // //     return (
// // //       <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-primary bg-gradient">
// // //         <div className="card shadow p-4 text-center" style={{ width: "350px" }}>
// // //           <h2 className="mb-4">Login</h2>

// // //           <button
// // //             className="btn btn-primary w-100 mb-3"
// // //             onClick={() => setRole("user")}
// // //           >
// // //             User Login
// // //           </button>

// // //           <button
// // //             className="btn btn-success w-100"
// // //             onClick={() => setRole("admin")}
// // //           >
// // //             Admin Login
// // //           </button>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
// // //       <div className="card shadow p-4" style={{ width: "350px" }}>
// // //         {role === "user" ? <UserLogin /> : <AdminLogin />}

// // //         <button
// // //           className="btn btn-link mt-3 w-100"
// // //           onClick={() => setRole(null)}
// // //         >
// // //           ← Back
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import { useState } from "react";
// // import UserLogin from "./UserLogin";
// // import AdminLogin from "./AdminLogin";

// // export default function Login() {
// //   const [role, setRole] = useState(null);

// //   return (
// //     <div className="container-fluid vh-100 d-flex align-items-center justify-content-center ">
      
// //       <div className="card shadow-lg p-4 text-center" style={{ width: "380px" }}>
        
// //         {/* Heading */}
// //         <h2 className="mb-4 fw-bold">Welcome to CourseHub</h2>

// //         {/* Role selection buttons */}
// //         {!role && (
// //           <div className="d-flex justify-content-center gap-3">
// //             <button
// //               className="btn btn-dark px-4"
// //               onClick={() => setRole("user")}
// //             >
// //               User Login
// //             </button>

// //             <button
// //               className="btn btn-dark px-4"
// //               onClick={() => setRole("admin")}
// //             >
// //               Admin Login
// //             </button>
// //           </div>
// //         )}

// //         {/* Login Forms */}
// //         {role && (
// //           <>
// //             <div className="mt-3">
// //               {role === "user" ? <UserLogin /> : <AdminLogin />}
// //             </div>

// //             <button
// //               className="btn btn-link mt-3"
// //               onClick={() => setRole(null)}
// //             >
// //               ← Back
// //             </button>
// //           </>
// //         )}

// //       </div>
// //     </div>
// //   );
// // }


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import UserLogin from "./UserLogin";
// import AdminLogin from "./AdminLogin";

// export default function Login() {
//   const [role, setRole] = useState(null);
//   const navigate = useNavigate();

//   return (
//     <div className="container-fluid vh-100 d-flex align-items-center justify-content-center position-relative">
      
//       {/* Back to Home - Top Left Corner */}
//       <button
//         className="btn btn-light position-absolute top-0 start-0 m-4 shadow-sm"
//         onClick={() => navigate("/")}
//       >
//         ← Back
//       </button>

//       <div className="card shadow-lg p-4 text-center" style={{ width: "380px" }}>
        
//         <h2 className="mb-4 fw-bold">Welcome to CourseHub</h2>

//         {!role && (
//           <div className="d-flex justify-content-center gap-3">
//             <button
//               className="btn btn-dark px-4"
//               onClick={() => setRole("user")}
//             >
//               User Login
//             </button>

//             <button
//               className="btn btn-dark px-4"
//               onClick={() => setRole("admin")}
//             >
//               Admin Login
//             </button>
//           </div>
//         )}

//         {role && (
//           <>
//             <div className="mt-3">
//               {role === "user" ? <UserLogin /> : <AdminLogin />}
//             </div>

//             <button
//               className="btn btn-outline-secondary w-100 mt-3"
//               onClick={() => setRole(null)}
//             >
//               ← Back
//             </button>
//           </>
//         )}
//       </div>
      
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserLogin from "./UserLogin";
import AdminLogin from "./AdminLogin";

export default function Login() {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  return (
    <div style={container}>
      
      {/* 🔙 Back Button */}
      <button style={backBtn} onClick={() => navigate("/")}>
        ← Back
      </button>

      {/* 🔳 Card */}
      <div style={card}>
        <h2 style={heading}>Welcome to CourseHub</h2>

        {/* Role Buttons */}
        {!role && (
          <div style={btnGroup}>
            <button style={btn} onClick={() => setRole("user")}>
              User Login
            </button>

            <button style={btn} onClick={() => setRole("admin")}>
              Admin Login
            </button>
          </div>
        )}

        {/* Forms */}
        {role && (
          <>
            <div style={{ marginTop: "15px" }}>
              {role === "user" ? <UserLogin /> : <AdminLogin />}
            </div>

            <button style={backInsideBtn} onClick={() => setRole(null)}>
              ← Back
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* 🔥 Styles */

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  // background: "linear-gradient(135deg, #000000, #434343)",
  background: "linear-gradient(to right, #23087b, #e5d3dd)",
};

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "15px",
  width: "350px",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
};

const heading = {
  marginBottom: "20px",
};

const btnGroup = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
};

const btn = {
  padding: "10px 15px",
  border: "none",
  borderRadius: "8px",
  background: "#111827",
  color: "white",
  cursor: "pointer",
};

const backBtn = {
  position: "absolute",
  top: "20px",
  left: "20px",
  padding: "8px 12px",
  borderRadius: "6px",
  border: "none",
  background: "white",
  cursor: "pointer",
};

const backInsideBtn = {
  marginTop: "15px",
  padding: "8px",
  border: "none",
  background: "transparent",
  color: "#0e0f11",
  cursor: "pointer",
};
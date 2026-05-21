// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../services/api";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.post("/auth/login", {
//         email,
//         password,
//         role: "admin",
//       });
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));
//       navigate("/admin"); // redirect to admin page after login
//     } catch (err) {
//       alert(err.response?.data?.msg || "Admin login failed");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow"
//     >
//       <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="w-full mb-3 p-2 border rounded"
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="w-full mb-3 p-2 border rounded"
//         required
//       />
//       <button
//         type="submit"
//         className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
//       >
//         Login
//       </button>
//     </form>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await api.post("/auth/login", {
  //       email,
  //       password,
  //       role: "admin",
  //     });
  //     localStorage.setItem("token", res.data.token);
  //     localStorage.setItem("user", JSON.stringify(res.data.user));
  //     navigate("/admin-dashboard/view-users"); // redirect to admin page after login
  //   } catch (err) {
  //     alert(err.response?.data?.msg || "Admin login failed");
  //   }
  // };
//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     // Remove 'role' from request
//     const res = await api.post("/auth/login", { email, password });

//     localStorage.setItem("token", res.data.token);
//     localStorage.setItem("user", JSON.stringify(res.data.user));

//     // Check role from backend user object
//     if (res.data.user.role !== "admin") {
//       alert("You are not an admin");
//       return;
//     }

//     navigate("/admin-dashboard/view-users"); // redirect to admin page
//   } catch (err) {
//     alert(err.response?.data?.msg || "Admin login failed");
//   }
// };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await api.post("/auth/login", {
      email,
      password,
      role: "admin"   // ✅ tell backend
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    navigate("/admin-dashboard/view-users");
  } catch (err) {
    alert(err.response?.data?.msg || "Admin login failed");
  }
};


  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off" // prevent autofill
      style={{
        maxWidth: "400px",
        width: "100%",
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        textAlign: "center",
        margin: "50px auto"
      }}
    >
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Admin Login
      </h2>

      <input
        type="email"
        name="admin_email" // avoid autofill
        placeholder="Email"
        value={email}
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "1rem"
        }}
      />

      <input
        type="password"
        name="admin_password" // avoid autofill
        placeholder="Password"
        value={password}
        autoComplete="new-password"
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "1rem"
        }}
      />

      <button
        type="submit"
        style={{
          width: "100%",
          backgroundColor: "#0d101b",
          color: "#fff",
          padding: "12px",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          fontWeight: "bold",
          cursor: "pointer"
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#3a453ddf"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#000000df"}
      >
        Login
      </button>
    </form>
  );
}



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await api.post("/auth/login", {
  //       email,
  //       password,
  //       role: "user",
  //     });
  //     localStorage.setItem("token", res.data.token);
  //     localStorage.setItem("user", JSON.stringify(res.data.user));
  //     navigate("/user/courses"); // redirect to courses after login
  //   } catch (err) {
  //     alert(err.response?.data?.msg || "Login failed");
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
//     if (res.data.user.role !== "user") {
//       alert("You are not a user");
//       return;
//     }

//     navigate("/user/courses"); // redirect to user courses page
//   } catch (err) {
//     alert(err.response?.data?.msg || "Login failed");
//   }
// };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await api.post("/auth/login", {
      email,
      password,
      role: "user"   // ✅ tell backend
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    navigate("/user/courses");
  } catch (err) {
    alert(err.response?.data?.msg || "Login failed");
  }
};


  return (
    <div
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   height: "100vh",
      //   background: "linear-gradient(to right, #667eea, #764ba2)",
      //   padding: "10px",
      // }}
     
    >
      <form
        onSubmit={handleSubmit}
        autoComplete="off"  
        style={{
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
          User Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"  
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "1rem",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
           autoComplete="new-password"
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "1rem",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#090a10",
            color: "#fff",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#3b3c44")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#000000")}
        >
          Login
        </button>
      </form>
    </div>
  );
}

// // import { useState } from "react";
// // import api from "../services/api";
// // import { useNavigate } from "react-router-dom";

// // export default function Register() {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const navigate = useNavigate();

// //   const registerUser = async () => {
// //     try {
// //       await api.post("/auth/register", {
// //         name,
// //         email,
// //         password,
// //         role: "user"
// //       });
// //       alert("Registration successful");
// //       navigate("/login");
// //     } catch (err) {
// //       alert("Registration failed");
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>User Registration</h2>

// //       <input
// //         placeholder="Name"
// //         value={name}
// //         onChange={e => setName(e.target.value)}
// //       />

// //       <input
// //         placeholder="Email"
// //         value={email}
// //         onChange={e => setEmail(e.target.value)}
// //       />

// //       <input
// //         placeholder="Password"
// //         type="password"
// //         value={password}
// //         onChange={e => setPassword(e.target.value)}
// //       />

// //       <br /><br />

// //       <button onClick={registerUser}>Register</button>
// //     </div>
// //   );
// // }


// import { useState } from "react";
// import api from "../services/api";
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const registerUser = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post("/auth/register", {
//         firstName,
//         lastName,
//         email,
//         phone,
//         password,
//         role: "user"
//       });
//       alert("Registration successful");
//       navigate("/login");
//     } catch (err) {
//       alert(err.response?.data?.msg || "Registration failed");
//     }
//   };

//   return (
//     <form
//       onSubmit={registerUser}
//       autoComplete="off"
//       style={{
//         maxWidth: "400px",
//         width: "100%",
//         margin: "50px auto",
//         padding: "30px",
//         backgroundColor: "#fff",
//         borderRadius: "12px",
//         boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
//         textAlign: "center"
//       }}
//     >
//       <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
//         User Registration
//       </h2>

//       <input
//         type="text"
//         placeholder="First Name"
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//         required
//         style={inputStyle}
//       />

//       <input
//         type="text"
//         placeholder="Last Name"
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//         required
//         style={inputStyle}
//       />

//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         autoComplete="new-email"
//         style={inputStyle}
//       />

//       <input
//         type="tel"
//         placeholder="Phone Number"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//         required
//         style={inputStyle}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         autoComplete="new-password"
//         style={inputStyle}
//       />

//       <button
//         type="submit"
//         style={{
//           width: "100%",
//           backgroundColor: "#007bff",
//           color: "#fff",
//           padding: "12px",
//           border: "none",
//           borderRadius: "8px",
//           fontSize: "1rem",
//           fontWeight: "bold",
//           cursor: "pointer",
//           marginTop: "15px"
//         }}
//         onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
//         onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007bff"}
//       >
//         Register
//       </button>

//       <p style={{ marginTop: "15px" }}>
//         Already have an account?{" "}
//         <span
//           onClick={() => navigate("/login")}
//           style={{ color: "#007bff", cursor: "pointer", textDecoration: "underline" }}
//         >
//           Login Now
//         </span>
//       </p>
//     </form>
//   );
// }

// // Shared input style
// const inputStyle = {
//   width: "100%",
//   padding: "10px",
//   marginBottom: "15px",
//   border: "1px solid #ccc",
//   borderRadius: "8px",
//   fontSize: "1rem"
// };

import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Strong password validation
  const isValidPassword = (pwd) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(pwd);
  };
  // Phone number validation (10 digits)
  const isValidPhone = (num) => {
    const regex = /^\d{10}$/;
    return regex.test(num);
  };

  const registerUser = async (e) => {
    e.preventDefault();

    if (!email.endsWith("@gmail.com")) {
      alert("Email must be a Gmail address");
      return;
    }

    if (!isValidPassword(password)) {
      alert(
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character, and be at least 6 characters long."
      );
      return;
    }
if (!isValidPhone(phone)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }
    
    try {
      await api.post("/auth/register", {
        firstName,
        lastName,
        email,
        phone,
        password,
        role: "user",
      });
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      alert("Registration failed. Try again!");
    }
  };

  // Inline CSS styles
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(to right, #23087b, #e5d3dd)",
    padding: "20px",
  };

  const cardStyle = {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#121317",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  };

  const linkStyle = {
    display: "block",
    marginTop: "15px",
    color: "#0d0d10",
    cursor: "pointer",
    textDecoration: "underline",
  };

  return (
    <div style={containerStyle}>
      <form style={cardStyle} onSubmit={registerUser} autoComplete="off">
        <h2 style={{ marginBottom: "20px" }}>User Registration</h2>

        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={inputStyle}
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={inputStyle}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
          autoComplete="new-email"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
          autoComplete="new-password"
        />

        <button type="submit" style={buttonStyle}>
        Create Account
        </button>

        <span
          style={linkStyle}
          onClick={() => navigate("/login")}
        >
          Already have an account? Login now
        </span>
      </form>
    </div>
  );
}

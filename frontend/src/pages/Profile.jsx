// // // // // // // // // src/pages/Profile.jsx
// // // // // // // // import React from "react";

// // // // // // // // export default function Profile() {
// // // // // // // //   // Get user info from localStorage
// // // // // // // //   const user = JSON.parse(localStorage.getItem("user")) || {};

// // // // // // // //   return (
// // // // // // // //     <div
// // // // // // // //       style={{
// // // // // // // //         display: "flex",
// // // // // // // //         justifyContent: "center",
// // // // // // // //         alignItems: "center",
// // // // // // // //         minHeight: "80vh",
// // // // // // // //         background: "#f3f4f6",
// // // // // // // //         padding: "20px",
// // // // // // // //       }}
// // // // // // // //     >
// // // // // // // //       <div
// // // // // // // //         style={{
// // // // // // // //           width: "100%",
// // // // // // // //           maxWidth: "500px",
// // // // // // // //           background: "#fff",
// // // // // // // //           padding: "30px",
// // // // // // // //           borderRadius: "12px",
// // // // // // // //           boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
// // // // // // // //         }}
// // // // // // // //       >
// // // // // // // //         <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "1.8rem" }}>
// // // // // // // //           My Profile
// // // // // // // //         </h2>

// // // // // // // //         <div style={{ marginBottom: "15px" }}>
// // // // // // // //           <strong>Name: </strong> {user.name || "Not available"}
// // // // // // // //         </div>
// // // // // // // //         <div style={{ marginBottom: "15px" }}>
// // // // // // // //           <strong>Email: </strong> {user.email || "Not available"}
// // // // // // // //         </div>
// // // // // // // //         <div style={{ marginBottom: "15px" }}>
// // // // // // // //           <strong>Phone: </strong> {user.phone || "Not available"}
// // // // // // // //         </div>

// // // // // // // //         {/* Optional: Logout button */}
// // // // // // // //         <button
// // // // // // // //           onClick={() => {
// // // // // // // //             localStorage.removeItem("user");
// // // // // // // //             localStorage.removeItem("token");
// // // // // // // //             window.location.href = "/login"; // redirect to login
// // // // // // // //           }}
// // // // // // // //           style={{
// // // // // // // //             width: "100%",
// // // // // // // //             padding: "12px",
// // // // // // // //             border: "none",
// // // // // // // //             borderRadius: "8px",
// // // // // // // //             backgroundColor: "#667eea",
// // // // // // // //             color: "#fff",
// // // // // // // //             fontSize: "1rem",
// // // // // // // //             cursor: "pointer",
// // // // // // // //             marginTop: "20px",
// // // // // // // //           }}
// // // // // // // //           onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#5a67d8")}
// // // // // // // //           onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#667eea")}
// // // // // // // //         >
// // // // // // // //           Logout
// // // // // // // //         </button>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // import React from "react";

// // // // // // // export default function Profile() {
// // // // // // //   const user = JSON.parse(localStorage.getItem("user"));
// // // // // // //   return (
// // // // // // //     <div style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
// // // // // // //       <h2>My Profile</h2>
// // // // // // //       {user ? (
// // // // // // //         <div>
// // // // // // //           <p><strong>Name:</strong> {user.name}</p>
// // // // // // //           <p><strong>Email:</strong> {user.email}</p>
// // // // // // //           <p><strong>Role:</strong> {user.role}</p>
// // // // // // //         </div>
// // // // // // //       ) : (
// // // // // // //         <p>User not logged in</p>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // import React from "react";

// // // // // // export default function Profile() {
// // // // // //   const user = JSON.parse(localStorage.getItem("user"));

// // // // // //   if (!user) {
// // // // // //     return <p style={{ textAlign: "center" }}>User not logged in</p>;
// // // // // //   }

// // // // // //   return (
// // // // // //     <div style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
// // // // // //       <h2>My Profile</h2>
// // // // // //       <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
// // // // // //       <p><strong>Email:</strong> {user.email}</p>
// // // // // //       <p><strong>Role:</strong> {user.role}</p>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // import React from "react";

// // // // // export default function Profile() {
// // // // //   const user = JSON.parse(localStorage.getItem("user"));

// // // // //   if (!user) {
// // // // //     return <p style={{ textAlign: "center" }}>Please login first</p>;
// // // // //   }

// // // // //   return (
// // // // //     <div style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
// // // // //       <h2>My Profile</h2>
// // // // //       <p><strong>Email:</strong> {user.email}</p>
// // // // //       <p><strong>User ID:</strong> {user._id}</p>
// // // // //       <p><strong>Role:</strong> {user.role}</p>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import React from "react";

// // // // export default function Profile() {
// // // //   const user = JSON.parse(localStorage.getItem("user"));

// // // //   if (!user) {
// // // //     return <p>Please login first</p>;
// // // //   }

// // // //   return (
// // // //     <div style={{ maxWidth: "500px", margin: "50px auto" }}>
// // // //       <h2>My Profile</h2>

// // // //       <p>
// // // //         <strong>Full Name:</strong> {user.firstName} {user.lastName}
// // // //       </p>

// // // //       <p>
// // // //         <strong>Email:</strong> {user.email}
// // // //       </p>

// // // //       <p>
// // // //         {/* <strong>Role:</strong> {user.role} */}
// // // //         <p><strong>Phone:</strong> {user?.phone}</p>
// // // //       </p>
// // // //     </div>
// // // //   );
// // // // }
// // // // // // // // src/pages/Profile.jsx
// // // // // // // import React from "react";

// // // // // // // export default function Profile() {
// // // // // // //   // Get user info from localStorage
// // // // // // //   const user = JSON.parse(localStorage.getItem("user")) || {};

// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       style={{
// // // // // // //         display: "flex",
// // // // // // //         justifyContent: "center",
// // // // // // //         alignItems: "center",
// // // // // // //         minHeight: "80vh",
// // // // // // //         background: "#f3f4f6",
// // // // // // //         padding: "20px",
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       <div
// // // // // // //         style={{
// // // // // // //           width: "100%",
// // // // // // //           maxWidth: "500px",
// // // // // // //           background: "#fff",
// // // // // // //           padding: "30px",
// // // // // // //           borderRadius: "12px",
// // // // // // //           boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "1.8rem" }}>
// // // // // // //           My Profile
// // // // // // //         </h2>

// // // // // // //         <div style={{ marginBottom: "15px" }}>
// // // // // // //           <strong>Name: </strong> {user.name || "Not available"}
// // // // // // //         </div>
// // // // // // //         <div style={{ marginBottom: "15px" }}>
// // // // // // //           <strong>Email: </strong> {user.email || "Not available"}
// // // // // // //         </div>
// // // // // // //         <div style={{ marginBottom: "15px" }}>
// // // // // // //           <strong>Phone: </strong> {user.phone || "Not available"}
// // // // // // //         </div>

// // // // // // //         {/* Optional: Logout button */}
// // // // // // //         <button
// // // // // // //           onClick={() => {
// // // // // // //             localStorage.removeItem("user");
// // // // // // //             localStorage.removeItem("token");
// // // // // // //             window.location.href = "/login"; // redirect to login
// // // // // // //           }}
// // // // // // //           style={{
// // // // // // //             width: "100%",
// // // // // // //             padding: "12px",
// // // // // // //             border: "none",
// // // // // // //             borderRadius: "8px",
// // // // // // //             backgroundColor: "#667eea",
// // // // // // //             color: "#fff",
// // // // // // //             fontSize: "1rem",
// // // // // // //             cursor: "pointer",
// // // // // // //             marginTop: "20px",
// // // // // // //           }}
// // // // // // //           onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#5a67d8")}
// // // // // // //           onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#667eea")}
// // // // // // //         >
// // // // // // //           Logout
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // import React from "react";

// // // // // // export default function Profile() {
// // // // // //   const user = JSON.parse(localStorage.getItem("user"));
// // // // // //   return (
// // // // // //     <div style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
// // // // // //       <h2>My Profile</h2>
// // // // // //       {user ? (
// // // // // //         <div>
// // // // // //           <p><strong>Name:</strong> {user.name}</p>
// // // // // //           <p><strong>Email:</strong> {user.email}</p>
// // // // // //           <p><strong>Role:</strong> {user.role}</p>
// // // // // //         </div>
// // // // // //       ) : (
// // // // // //         <p>User not logged in</p>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import React from "react";

// // // // // export default function Profile() {
// // // // //   const user = JSON.parse(localStorage.getItem("user"));

// // // // //   if (!user) {
// // // // //     return <p style={{ textAlign: "center" }}>User not logged in</p>;
// // // // //   }

// // // // //   return (
// // // // //     <div style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
// // // // //       <h2>My Profile</h2>
// // // // //       <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
// // // // //       <p><strong>Email:</strong> {user.email}</p>
// // // // //       <p><strong>Role:</strong> {user.role}</p>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import React from "react";

// // // // export default function Profile() {
// // // //   const user = JSON.parse(localStorage.getItem("user"));

// // // //   if (!user) {
// // // //     return <p style={{ textAlign: "center" }}>Please login first</p>;
// // // //   }

// // // //   return (
// // // //     <div style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
// // // //       <h2>My Profile</h2>
// // // //       <p><strong>Email:</strong> {user.email}</p>
// // // //       <p><strong>User ID:</strong> {user._id}</p>
// // // //       <p><strong>Role:</strong> {user.role}</p>
// // // //     </div>
// // // //   );
// // // // }

// // // import React from "react";

// // // export default function Profile() {
// // //   const user = JSON.parse(localStorage.getItem("user"));

// // //   if (!user) {
// // //     return <p>Please login first</p>;
// // //   }

// // //   return (
// // //     <div style={{ maxWidth: "500px", margin: "50px auto" }}>
// // //       <h2>My Profile</h2>

// // //       <p>
// // //         <strong>Full Name:</strong> {user.firstName} {user.lastName}
// // //       </p>

// // //       <p>
// // //         <strong>Email:</strong> {user.email}
// // //       </p>

// // //       <p>
// // //         {/* <strong>Role:</strong> {user.role} */}
// // //         <p><strong>Phone:</strong> {user?.phone}</p>
// // //       </p>
// // //     </div>
// // //   );
// // // }


// // import { useState, useEffect } from "react";
// // import api from "../services/api";

// // export default function Profile() {
// //   const [user, setUser] = useState(null);
// //   const [editing, setEditing] = useState(false);
// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     phone: ""
// //   });

// //   useEffect(() => {
// //     api.get("/auth/profile", {
// //       headers: {
// //         Authorization: `Bearer ${localStorage.getItem("token")}`
// //       }
// //     }).then(res => {
// //       setUser(res.data);
// //       setFormData({
// //         firstName: res.data.firstName,
// //         lastName: res.data.lastName,
// //         phone: res.data.phone || ""
// //       });
// //     });
// //   }, []);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleUpdate = async () => {
// //     const res = await api.put("/auth/profile", formData, {
// //       headers: {
// //         Authorization: `Bearer ${localStorage.getItem("token")}`
// //       }
// //     });

// //     setUser(res.data);
// //     setEditing(false);
// //     alert("Profile updated successfully!");
// //   };

// //   if (!user) return <p>Loading...</p>;

// //   return (
// //     <div style={{ maxWidth: "400px", margin: "auto" }}>
// //       <h2>User Profile</h2>

// //       {!editing ? (
// //         <>
// //           <p><strong>First Name:</strong> {user.firstName}</p>
// //           <p><strong>Last Name:</strong> {user.lastName}</p>
// //           <p><strong>Email:</strong> {user.email}</p>
// //           <p><strong>Phone:</strong> {user.phone || "Not added"}</p>

// //           <button onClick={() => setEditing(true)}>
// //             Edit Profile
// //           </button>
// //         </>
// //       ) : (
// //         <>
// //           <input
// //             name="firstName"
// //             value={formData.firstName}
// //             onChange={handleChange}
// //             placeholder="First Name"
// //           />
// //           <br />
// //           <input
// //             name="lastName"
// //             value={formData.lastName}
// //             onChange={handleChange}
// //             placeholder="Last Name"
// //           />
// //           <br />
// //           <input
// //             name="phone"
// //             value={formData.phone}
// //             onChange={handleChange}
// //             placeholder="Phone"
// //           />
// //           <br />
// //           <button onClick={handleUpdate}>
// //             Save Changes
// //           </button>
// //           <button onClick={() => setEditing(false)}>
// //             Cancel
// //           </button>
// //         </>
// //       )}
// //     </div>
// //   );
// // }


// import { useState, useEffect } from "react";
// import api from "../services/api";
// import "../css/Profile.css";

// export default function Profile() {
//   const [user, setUser] = useState(null);
//   const [editing, setEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: ""
//   });

//   useEffect(() => {
//     api.get("/auth/profile", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`
//       }
//     }).then(res => {
//       setUser(res.data);
//       setFormData({
//         firstName: res.data.firstName,
//         lastName: res.data.lastName,
//         phone: res.data.phone || ""
//       });
//     });
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = async () => {
//     const res = await api.put("/auth/profile", formData, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`
//       }
//     });

//     setUser(res.data);
//     setEditing(false);
//     alert("Profile updated successfully!");
//   };

//   if (!user) return <p className="loading">Loading...</p>;

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         <h2>My Profile</h2>

//         {!editing ? (
//           <>
//             <div className="profile-row">
//               <span>First Name:</span>
//               <span>{user.firstName}</span>
//             </div>

//             <div className="profile-row">
//               <span>Last Name:</span>
//               <span>{user.lastName}</span>
//             </div>

//             <div className="profile-row">
//               <span>Email:</span>
//               <span>{user.email}</span>
//             </div>

//             <div className="profile-row">
//               <span>Phone:</span>
//               <span>{user.phone || "Not added"}</span>
//             </div>

//             <button className="primary-btn" onClick={() => setEditing(true)}>
//               Edit Profile
//             </button>
//           </>
//         ) : (
//           <>
//             <input
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               placeholder="First Name"
//             />

//             <input
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               placeholder="Last Name"
//             />

//             <input
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Phone"
//             />

//             <div className="button-group">
//               <button className="primary-btn" onClick={handleUpdate}>
//                 Save Changes
//               </button>

//               <button
//                 className="secondary-btn"
//                 onClick={() => setEditing(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import api from "../services/api";
import "../css/Profile.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: ""
  });

  useEffect(() => {
    api.get("/auth/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then(res => {
      setUser(res.data);
      setFormData({
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        phone: res.data.phone || ""
      });
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const res = await api.put("/auth/profile", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    setUser(res.data);
    setEditing(false);
    alert("Profile updated successfully!");
  };

  if (!user) return <p className="loading">Loading...</p>;

  return (
    <div className="profile-container">
      <div className="profile-card">

        {/* Avatar */}
        <div className="avatar">
          {user.firstName?.charAt(0)}
        </div>

        <h2>{user.firstName} {user.lastName}</h2>
        <p className="email">{user.email}</p>

        {!editing ? (
          <>
            <div className="info-box">
              <p><strong>📞 Phone:</strong> {user.phone || "Not added"}</p>
            </div>

            <button className="primary-btn" onClick={() => setEditing(true)}>
              Edit Profile
            </button>
          </>
        ) : (
          <>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />

            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
            />

            <div className="button-group">
              <button className="primary-btn" onClick={handleUpdate}>
                Save
              </button>

              <button
                className="secondary-btn"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
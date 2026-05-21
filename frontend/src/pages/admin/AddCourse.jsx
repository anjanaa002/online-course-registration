// // // export default function AddCourse() {
// // //   return (
// // //     <div>
// // //       <h2>Add Course</h2>
// // //       <p>Course creation form will be here.</p>
// // //     </div>
// // //   );
// // // }

// // import { useState } from "react";
// // import api from "../../services/api";

// // export default function AddCourse() {
// //   const [title, setTitle] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [price, setPrice] = useState("");

// //   const submit = async () => {
// //     try {
// //       await api.post("/courses", { title, description, price });
// //       alert("Course added successfully");
// //       setTitle(""); setDescription(""); setPrice("");
// //     } catch (err) {
// //       alert("Failed to add course");
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Add Course</h2>

// //       <input placeholder="Title" value={title}
// //         onChange={e => setTitle(e.target.value)} /><br /><br />

// //       <textarea placeholder="Description" value={description}
// //         onChange={e => setDescription(e.target.value)} /><br /><br />

// //       <input placeholder="Price" value={price}
// //         onChange={e => setPrice(e.target.value)} /><br /><br />

// //       <button onClick={submit}>Add Course</button>
// //     </div>
// //   );
// // }
// import { useState } from "react";
// import api from "../../services/api";

// export default function AddCourse() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [duration, setDuration] = useState("");
//   const [instructorName, setInstructorName] = useState("");
//   const [qualification, setQualification] = useState("");

//   // const submit = async () => {
//   //   try {
//   //     await api.post("/courses", {
//   //       title,
//   //       description,
//   //       price,
//   //       duration,
//   //       instructorName,
//   //       qualification
//   //     });

//   //     alert("Course added successfully");

//   //     setTitle("");
//   //     setDescription("");
//   //     setPrice("");
//   //     setDuration("");
//   //     setInstructorName("");
//   //     setQualification("");

//   //   } catch (err) {
//   //     console.error(err);
//   //     alert("Failed to add course");
//   //   }
//   // };
// const submit = async () => {

//   // ✅ Frontend validation
//   if (!title || !description || !price || !duration || !instructorName || !qualification) {
//     alert("Please fill all fields");
//     return;
//   }

//   try {
//     await api.post("/courses", {
//       title,
//       description,
//       price: Number(price),
//       duration,
//       instructorName,
//       qualification
//     });

//     alert("Course added successfully");

//     setTitle("");
//     setDescription("");
//     setPrice("");
//     setDuration("");
//     setInstructorName("");
//     setQualification("");

//   } catch (err) {
//     console.error(err);
//     alert("Failed to add course");
//   }
// };
//   return (
//     <div>
//       <h2>Add Course</h2>

//       <input
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       /><br /><br />

//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       /><br /><br />

//       <input
//         placeholder="Price"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//       /><br /><br />

//       <input
//         placeholder="Duration (e.g. 6 Weeks)"
//         value={duration}
//         onChange={(e) => setDuration(e.target.value)}
//       /><br /><br />

//       <input
//         placeholder="Instructor Name"
//         value={instructorName}
//         onChange={(e) => setInstructorName(e.target.value)}
//       /><br /><br />

//       <input
//         placeholder="Instructor Qualification"
//         value={qualification}
//         onChange={(e) => setQualification(e.target.value)}
//       /><br /><br />

//       <button onClick={submit}>Add Course</button>
//     </div>
//   );
// }

import { useState } from "react";
import api from "../../services/api";

export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [qualification, setQualification] = useState("");

  const submit = async () => {
    if (!title || !description || !price || !duration || !instructorName || !qualification) {
      alert("Please fill all fields");
      return;
    }

    try {
      await api.post("/courses", {
        title,
        description,
        price: Number(price),
        duration,
        instructorName,
        qualification
      });

      alert("Course added successfully");

      setTitle("");
      setDescription("");
      setPrice("");
      setDuration("");
      setInstructorName("");
      setQualification("");

    } catch (err) {
      alert("Failed to add course");
    }
  };

  const container = {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "30px",
    background: "#ffffff",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#0b266f",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    background: "#110d68",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <div style={container}>
      <h2 style={titleStyle}> Add New Course</h2>

      <input
        style={inputStyle}
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        style={inputStyle}
        placeholder="Course Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        style={inputStyle}
        placeholder="Price (₹)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        style={inputStyle}
        placeholder="Duration (e.g. 6 Weeks)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <input
        style={inputStyle}
        placeholder="Instructor Name"
        value={instructorName}
        onChange={(e) => setInstructorName(e.target.value)}
      />

      <input
        style={inputStyle}
        placeholder="Instructor Qualification"
        value={qualification}
        onChange={(e) => setQualification(e.target.value)}
      />

      <button
        style={buttonStyle}
        onClick={submit}
        onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
        onMouseLeave={(e) => (e.target.style.opacity = "1")}
      >
        Add Course 
      </button>
    </div>
  );
}
// // // import { useEffect, useState } from "react";
// // // import api from "../../services/api";

// // // export default function EditCourse() {
// // //   const [courses, setCourses] = useState([]);

// // //   useEffect(() => {
// // //     api.get("/courses")
// // //       .then(res => setCourses(res.data))
// // //       .catch(err => console.error(err));
// // //   }, []);

// // //   const deleteCourse = async (id) => {
// // //     if (!window.confirm("Are you sure you want to delete this course?")) return;

// // //     try {
// // //       await api.delete(`/courses/${id}`);
// // //       alert("Course deleted");
// // //       setCourses(courses.filter(c => c._id !== id));
// // //     } catch {
// // //       alert("Delete failed");
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Edit / Delete Courses</h2>

// // //       {courses.map(course => (
// // //         <div key={course._id} style={box}>
// // //           <h4>{course.title}</h4>
// // //           <button style={deleteBtn} onClick={() => deleteCourse(course._id)}>
// // //             Delete Course
// // //           </button>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // const box = {
// // //   border: "1px solid #ddd",
// // //   padding: "10px",
// // //   marginBottom: "10px",
// // //   borderRadius: "6px"
// // // };

// // // const deleteBtn = {
// // //   backgroundColor: "red",
// // //   color: "white",
// // //   border: "none",
// // //   padding: "6px 10px",
// // //   borderRadius: "4px",
// // //   cursor: "pointer"
// // // };


// // import { useEffect, useState } from "react";
// // import api from "../../services/api";

// // export default function EditCourse() {
// //   const [courses, setCourses] = useState([]);
// //   const [editing, setEditing] = useState(null);
// //   const [title, setTitle] = useState("");
// //   const [price, setPrice] = useState("");

// //   useEffect(() => {
// //     api.get("/courses").then(res => setCourses(res.data));
// //   }, []);

// //   const startEdit = (course) => {
// //     setEditing(course._id);
// //     setTitle(course.title);
// //     setPrice(course.price);
// //   };

// //   const saveEdit = async () => {
// //     await api.put(`/courses/${editing}`, { title, price });
// //     alert("Course updated");
// //     setEditing(null);
// //     window.location.reload();
// //   };

// //   const deleteCourse = async (id) => {
// //     if (!window.confirm("Delete course?")) return;
// //     await api.delete(`/courses/${id}`);
// //     alert("Deleted");
// //     setCourses(courses.filter(c => c._id !== id));
// //   };

// //   return (
// //     <div>
// //       <h2>Edit Courses</h2>

// //       {courses.map(course => (
// //         <div key={course._id} style={box}>
// //           {editing === course._id ? (
// //             <>
// //               <input value={title} onChange={e => setTitle(e.target.value)} />
// //               <input value={price} onChange={e => setPrice(e.target.value)} />
              
// //               <button onClick={saveEdit}>Save</button>
// //             </>
// //           ) : (
// //             <>
// //               <h4>{course.title}</h4>
// //               <p>₹{course.price}</p>
// //               <button onClick={() => startEdit(course)}>Edit</button>
// //               <button onClick={() => deleteCourse(course._id)}>Delete</button>
// //             </>
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // const box = {
// //   border: "1px solid #ccc",
// //   padding: "10px",
// //   marginBottom: "10px"
// // };


// import { useEffect, useState } from "react";
// import api from "../../services/api";

// export default function EditCourse() {
//   const [courses, setCourses] = useState([]);
//   const [editing, setEditing] = useState(null);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     price: "",
//     duration: "",
//     instructorName: "",
//     qualification: ""
//   });

//   useEffect(() => {
//     api.get("/courses").then(res => setCourses(res.data));
//   }, []);

//   const startEdit = (course) => {
//     setEditing(course._id);

//     setForm({
//       title: course.title || "",
//       description: course.description || "",
//       price: course.price || "",
//       duration: course.duration || "",
//       instructorName: course.instructor?.name || "",
//       qualification: course.instructor?.qualification || ""
//     });
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const saveEdit = async () => {
//     await api.put(`/courses/${editing}`, form);
//     alert("Course updated");
//     setEditing(null);
//     window.location.reload();
//   };

//   const deleteCourse = async (id) => {
//     if (!window.confirm("Delete course?")) return;
//     await api.delete(`/courses/${id}`);
//     alert("Deleted");
//     setCourses(courses.filter(c => c._id !== id));
//   };

//   return (
//     <div>
//       <h2>Edit Courses</h2>

//       {courses.map(course => (
//         <div key={course._id} style={box}>
//           {editing === course._id ? (
//             <>
//               <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
//               <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
//               <input name="price" value={form.price} onChange={handleChange} placeholder="Price" />
//               <input name="duration" value={form.duration} onChange={handleChange} placeholder="Duration" />
//               <input name="instructorName" value={form.instructorName} onChange={handleChange} placeholder="Instructor Name" />
//               <input name="qualification" value={form.qualification} onChange={handleChange} placeholder="Qualification" />

//               <button onClick={saveEdit}>Save</button>
//             </>
//           ) : (
//             <>
//               <h4>{course.title}</h4>
//               <p>{course.description}</p>
//               <p>₹{course.price}</p>
//               <p>Duration: {course.duration}</p>
//               <p>Instructor: {course.instructor?.name}</p>
//               <p>Qualification: {course.instructor?.qualification}</p>

//               <button onClick={() => startEdit(course)}>Edit</button>
//               <button onClick={() => deleteCourse(course._id)}>Delete</button>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// const box = {
//   border: "1px solid #ccc",
//   padding: "10px",
//   marginBottom: "10px"
// };


import { useEffect, useState } from "react";
import api from "../../services/api";

export default function EditCourse() {
  const [courses, setCourses] = useState([]);
  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    duration: "",
    instructorName: "",
    qualification: ""
  });

  useEffect(() => {
    api.get("/courses").then(res => setCourses(res.data));
  }, []);

  const startEdit = (course) => {
    setEditing(course._id);

    setForm({
      title: course.title || "",
      description: course.description || "",
      price: course.price || "",
      duration: course.duration || "",
      instructorName: course.instructor?.name || "",
      qualification: course.instructor?.qualification || ""
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveEdit = async () => {
    await api.put(`/courses/${editing}`, form);
    alert("Course updated");
    setEditing(null);
    window.location.reload();
  };

  const deleteCourse = async (id) => {
    if (!window.confirm("Delete course?")) return;
    await api.delete(`/courses/${id}`);
    alert("Deleted");
    setCourses(courses.filter(c => c._id !== id));
  };

  return (
    <div style={container}>
      <h2 style={heading}>✏️ Manage Courses</h2>

      {courses.map(course => (
        <div key={course._id} style={card}>
          {editing === course._id ? (
            <>
              <input name="title" value={form.title} onChange={handleChange} placeholder="Title" style={input}/>
              <input name="description" value={form.description} onChange={handleChange} placeholder="Description" style={input}/>
              <input name="price" value={form.price} onChange={handleChange} placeholder="Price" style={input}/>
              <input name="duration" value={form.duration} onChange={handleChange} placeholder="Duration" style={input}/>
              <input name="instructorName" value={form.instructorName} onChange={handleChange} placeholder="Instructor Name" style={input}/>
              <input name="qualification" value={form.qualification} onChange={handleChange} placeholder="Qualification" style={input}/>

              <button style={saveBtn} onClick={saveEdit}>Save</button>
            </>
          ) : (
            <>
              <h3 style={title}>{course.title}</h3>
              <p style={desc}>{course.description}</p>
              <p><b>₹{course.price}</b></p>
              <p> {course.duration}</p>
              <p> {course.instructor?.name}</p>
              <p> {course.instructor?.qualification}</p>

              <div style={btnGroup}>
                <button style={editBtn} onClick={() => startEdit(course)}>Edit</button>
                <button style={deleteBtn} onClick={() => deleteCourse(course._id)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

/* 🔥 Styles */

const container = {
  maxWidth: "800px",
  margin: "30px auto",
};

const heading = {
  textAlign: "center",
  marginBottom: "20px",
  color: "#1d4ed8",
};

const card = {
  background: "#fff",
  padding: "20px",
  marginBottom: "15px",
  borderRadius: "12px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
};

const title = {
  marginBottom: "5px",
};

const desc = {
  fontSize: "14px",
  color: "#6b7280",
};

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const btnGroup = {
  display: "flex",
  gap: "10px",
  marginTop: "10px",
};

const editBtn = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "6px",
  cursor: "pointer",
};

const deleteBtn = {
  background: "#dc2626",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "6px",
  cursor: "pointer",
};

const saveBtn = {
  background: "linear-gradient(135deg, #16a34a, #15803d)",
  color: "white",
  border: "none",
  padding: "10px",
  borderRadius: "6px",
  cursor: "pointer",
};
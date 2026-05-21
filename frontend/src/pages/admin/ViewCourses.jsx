// // import { useEffect, useState } from "react";
// // import api from "../../services/api";

// // export default function ViewCourses() {
// //   const [courses, setCourses] = useState([]);

// //   // useEffect(() => {
// //   //   console.log("ViewCourses loaded");
// //   //   api.get("/courses")
// //   //     .then(res => setCourses(res.data))
// //   //     .catch(err => console.error(err));
// //   // }, []);

// //   useEffect(() => {
// //   api.get("/courses")
// //     .then(res => {
// //       console.log("Courses from backend:", res.data);
// //       setCourses(res.data);
// //     })
// //     .catch(err => console.error(err));
// // }, []);

// //   return (
// //     <div>
// //       <h2>All Courses</h2>

// //       {/* {courses.map(course => (
// //         <div key={course._id} style={box}>
// //           <h4>{course.title}</h4>
// //           <p>{course.description}</p>
// //           <p>₹{course.price}</p>
// //         </div>
// //       ))} */}
// //       {courses.map(course => (
// //   <div key={course._id} style={box}>
// //     <h4>{course.title}</h4>
// //     <p>{course.description}</p>
// //     <p><strong>Price:</strong> ₹{course.price}</p>

// //     {/* ✅ Add these lines */}
// //     <p><strong>Duration:</strong> {course.duration}</p>
// //     <p><strong>Instructor:</strong> {course.instructor?.name}</p>
// //     <p><strong>Qualification:</strong> {course.instructor?.qualification}</p>
// //   </div>
// // ))}
// //     </div>
// //   );
// // }

// // const box = {
// //   border: "1px solid #ddd",
// //   padding: "10px",
// //   marginBottom: "10px",
// //   borderRadius: "6px"
// // };


// import { useEffect, useState } from "react";
// import api from "../../services/api";

// export default function ViewCourses() {
//   const [courses, setCourses] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     api.get("/courses")
//       .then(res => setCourses(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   const filteredCourses = courses.filter(course =>
//     course.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <h2>All Courses</h2>

//       <input
//         type="text"
//         placeholder="Search by course title..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{
//           padding: "8px",
//           width: "300px",
//           marginBottom: "15px",
//           borderRadius: "5px",
//           border: "1px solid #ccc"
//         }}
//       />

//       {filteredCourses.map(course => (
//         <div key={course._id} style={box}>
//           <h4>{course.title}</h4>
//           <p>{course.description}</p>
//           <p><strong>Price:</strong> ₹{course.price}</p>
//           <p><strong>Duration:</strong> {course.duration}</p>
//           <p><strong>Instructor:</strong> {course.instructor?.name}</p>
//           <p><strong>Qualification:</strong> {course.instructor?.qualification}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// const box = {
//   border: "1px solid #ddd",
//   padding: "10px",
//   marginBottom: "10px",
//   borderRadius: "6px"
// };

import { useEffect, useState } from "react";
import api from "../../services/api";
import "../../css/ViewCourses.css";

export default function ViewCourses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  }, []);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="courses-container">
      <h2>All Courses</h2>

      <input
        type="text"
        placeholder="Search by course title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="courses-grid">
        {filteredCourses.map(course => (
          <div key={course._id} className="course-card">
            <h3>{course.title}</h3>
            <p className="description">{course.description}</p>

            <div className="course-info">
              <p><strong>Price:</strong> ₹{course.price}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Instructor:</strong> {course.instructor?.name}</p>
              <p><strong>Qualification:</strong> {course.instructor?.qualification}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
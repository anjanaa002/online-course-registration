// // // // import { useEffect, useState } from "react";
// // // // import api from "../services/api";

// // // // export default function MyCourses() {
// // // //   const user = JSON.parse(localStorage.getItem("user"));
// // // //   const [courses, setCourses] = useState([]);

// // // //   useEffect(() => {
// // // //     api.get(`/enroll/${user._id}`).then(res => setCourses(res.data));
// // // //   }, []);

// // // //   return courses.map(e => <p key={e._id}>{e.courseId.title}</p>);
// // // // }


// // // import { useEffect, useState } from "react";
// // // import api from "../services/api";
// // // import { useNavigate } from "react-router-dom";

// // // export default function MyCourses() {
// // //   const navigate = useNavigate();
// // //   const user = JSON.parse(localStorage.getItem("user"));
// // //   const token = localStorage.getItem("token");

// // //   const [courses, setCourses] = useState([]);

// // //   useEffect(() => {
// // //     if (!user || !token) {
// // //       navigate("/login");
// // //       return;
// // //     }

// // //     api.get(`/enroll/${user._id}`)
// // //       .then(res => {
// // //         console.log("MyCourses data:", res.data);
// // //         setCourses(res.data);
// // //       })
// // //       .catch(err => {
// // //         console.error("Error fetching courses:", err);
// // //       });

// // //   }, []);

// // //   if (courses.length === 0) {
// // //     return <p style={{ textAlign: "center" }}>No enrolled courses yet</p>;
// // //   }

// // //   return (
// // //     <div>
// // //       {courses.map(e => (
// // //         <p key={e._id}>{e.courseId?.title}</p>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // import { useEffect, useState } from "react";
// // import api from "../services/api";
// // import { useNavigate } from "react-router-dom";

// // export default function MyCourses() {
// //   const navigate = useNavigate();
// //   const [courses, setCourses] = useState([]);

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");

// //     if (!token) {
// //       navigate("/login");
// //       return;
// //     }

// //     api.get("/enroll/my")  // ✅ correct route
// //       .then(res => {
// //         console.log("My courses:", res.data);
// //         setCourses(res.data);
// //       })
// //       .catch(err => {
// //         console.error("Error:", err.response?.data || err.message);
// //       });

// //   }, []);

// //   if (courses.length === 0) {
// //     return <p style={{ textAlign: "center" }}>No enrolled courses yet</p>;
// //   }

// //   return (
// //     <div>
// //       {/* {courses.map(course => (
// //         <p key={course._id}>{course.title}</p>
// //       ))} */}
// //       {courses.map((course) => (
// //   <div
// //     key={course._id}
// //     style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
// //   >
// //     <h3>{course.title}</h3>
// //     <p>{course.description}</p>
// //     <p><strong>Price:</strong> ₹{course.price}</p>

// //     <p><strong>Duration:</strong> {course.duration}</p>
// //     <p><strong>Instructor:</strong> {course.instructor?.name}</p>
// //     <p><strong>Qualification:</strong> {course.instructor?.qualification}</p>
// //   </div>
// // ))}
// //     </div>
// //   );
// // }


// import { useEffect, useState } from "react";
// import api from "../services/api";
// import { useNavigate } from "react-router-dom";
// import "../css/MyCourses.css";

// export default function MyCourses() {
//   const navigate = useNavigate();
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     api.get("/enroll/my")
//       .then(res => {
//         setCourses(res.data);
//       })
//       .catch(err => {
//         console.error("Error:", err.response?.data || err.message);
//       });

//   }, []);

//   if (courses.length === 0) {
//     return (
//       <p className="no-courses">
//         No enrolled courses yet
//       </p>
//     );
//   }

//   return (
//     <div className="mycourses-container">
//       <h2 className="mycourses-title">My Courses</h2>

//       <div className="mycourses-grid">
//         {courses.map((course) => (
//           <div key={course._id} className="mycourse-card">
//             <h3>{course.title}</h3>
//             <p>{course.description}</p>

//             <p><strong>Price:</strong> ₹{course.price}</p>
//             <p><strong>Duration:</strong> {course.duration}</p>
//             <p><strong>Instructor:</strong> {course.instructor?.name}</p>
//             <p><strong>Qualification:</strong> {course.instructor?.qualification}</p>

            

            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import "../css/MyCourses.css";
import learningImg from "../assets/progress.svg";

export default function MyCourses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    api.get("/enroll/my")
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  }, []);

  if (courses.length === 0) {
    return <p className="no-courses">No enrolled courses yet</p>;
  }

  return (
    <div className="mycourses-container">
      <div className="header-row">
      <h1 className="mycourses-title">🎓 My Learning</h1>

<img src={learningImg} alt="learning" className="header-img" />
</div>
      <div className="mycourses-grid">
        {courses.map((course) => (
          <div key={course._id} className="mycourse-card">
            {/* Top Banner */}
            <div className="card-banner">
              <span className="price-tag">₹{course.price}</span>
            </div>

            <div className="card-content">
              <h3>{course.title}</h3>
              <p className="desc">{course.description}</p>

              <div className="info">
                <p><strong>⏱ Duration:</strong> {course.duration}</p>
                <p><strong>👨‍🏫 Instructor:</strong> {course.instructor?.name}</p>
                <p><strong>🎓 Qualification:</strong> {course.instructor?.qualification}</p>
              </div>

              {/* <button className="start-btn">
                Continue Learning →
              </button> */}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
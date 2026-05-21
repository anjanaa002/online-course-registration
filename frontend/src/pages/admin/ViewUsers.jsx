// // // import { useEffect, useState } from "react";
// // // import api from "../../services/api";

// // // export default function ViewUsers() {
// // //   const [users, setUsers] = useState([]);

// // //   useEffect(() => {
// // //     api.get("/admin/users-with-courses")
// // //       .then(res => setUsers(res.data))
// // //       .catch(err => console.error(err));
// // //   }, []);

// // //   return (
// // //     <div>
// // //       <h2>Users & Enrolled Courses</h2>

// // //       {users.map(user => (
// // //         <div key={user._id} style={box}>
// // //           <h4>{user.firstName} {user.lastName} ({user.email})</h4>


// // //           {user.courses.length === 0 ? (
// // //             <p>No courses enrolled</p>
// // //           ) : (
// // //             <ul>
// // //               {user.courses.map(course => (
// // //                 <li key={course._id}>{course.title}</li>
// // //               ))}
// // //             </ul>
// // //           )}
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

// // import { useEffect, useState } from "react";
// // import api from "../../services/api";

// // export default function ViewUsers() {
// //   const [users, setUsers] = useState([]);

// //   useEffect(() => {
// //     api.get("/admin/users-with-courses")
// //       .then(res => setUsers(res.data))
// //       .catch(err => console.error(err));
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Users & Enrolled Courses</h2>

// //       {users.map(user => (
// //         <div key={user._id} style={box}>
// //           {/* Display first name and last name separately */}
// //           <h4>
// //             {user.firstName} {user.lastName} ({user.email})
// //           </h4>

// //           {user.courses.length === 0 ? (
// //             <p>No courses enrolled</p>
// //           ) : (
// //             <ul>
// //               {user.courses.map(course => (
// //                 <li key={course._id}>{course.title}</li>
// //               ))}
// //             </ul>
// //           )}
// //         </div>
// //       ))}
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
// import "../../css/ViewUsers.css";

// export default function ViewUsers() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     api.get("/admin/users-with-courses")
//       .then(res => setUsers(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Users & Enrolled Courses</h2>

//       {users.length === 0 && <p>No users found</p>}

//       {/* {users.map(user => (
//         <div key={user._id} style={box}>
//           <h4>
//             {user.firstName} {user.lastName} ({user.email})
//           </h4>

//           {user.courses.length === 0 ? (
//             <p>No courses enrolled</p>
//           ) : (
//             <ul>
//               {user.courses.map(course => (
//                 <li key={course._id}>{course.title}</li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ))} */}

//       {users.map(user => (
//   <div key={user._id} style={box}>
//     <p><strong>User ID:</strong> {user._id}</p>
//     <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
//     <p><strong>Email:</strong> {user.email}</p>
//     <p><strong>Phone:</strong> {user.phone || "Not provided"}</p>

//     <p><strong>Enrolled Courses:</strong></p>

//     {user.courses.length === 0 ? (
//       <p>No courses enrolled</p>
//     ) : (
//       user.courses.map(course => (
//         <div key={course._id} style={{ marginLeft: "15px" }}>
//           <p><strong>Course Reg ID:</strong> {course._id}</p>
//           <p>Title: {course.title}</p>
//           <p>Price: ₹{course.price}</p>
//         </div>
//       ))
//     )}
//   </div>
// ))}
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
import "../../css/ViewUsers.css";

export default function ViewUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/admin/users-with-courses")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="users-container">
      <h2>Users & Enrolled Courses</h2>

      {users.length === 0 && <p>No users found</p>}

      {users.map(user => (
        <div key={user._id} className="user-card">

          <p><strong>User ID:</strong> {user._id}</p>
          <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone || "Not provided"}</p>

          <p><strong>Enrolled Courses:</strong></p>

          {user.courses.length === 0 ? (
            <p className="no-courses">No courses enrolled</p>
          ) : (
            user.courses.map(course => (
              <div key={course._id} className="course-item">
                <p><strong>Course ID:</strong> {course._id}</p>
                <p>Title: {course.title}</p>
                <p>Price: ₹{course.price}</p>
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
}
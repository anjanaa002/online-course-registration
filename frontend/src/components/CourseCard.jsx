// // // // // // export default function CourseCard({ course, enroll }) {
// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h3>{course.title}</h3>
// // // // // //       <p>{course.description}</p>
// // // // // //       <p>₹{course.price}</p>
// // // // // //       <button onClick={() => enroll(course)}>Enroll</button>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // import api from "../services/api";

// // // // // export default function CourseCard({ course, enroll }) {

// // // // //   const payNow = async () => {
// // // // //     const res = await api.post("/payment", {
// // // // //       title: course.title,
// // // // //       price: course.price
// // // // //     });

// // // // //     window.location.href = `https://checkout.stripe.com/pay/${res.data.id}`;
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <h3>{course.title}</h3>
// // // // //       <p>{course.description}</p>
// // // // //       <p>₹{course.price}</p>

// // // // //       <button onClick={() => enroll(course)}>Enroll (Free)</button>
// // // // //       <button onClick={payNow}>Pay Now</button>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // export default function CourseCard({ course }) {
// // // //   return (
// // // //     <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
// // // //       <h3>{course.title}</h3>
// // // //       <p>{course.description}</p>
// // // //       <p>₹{course.price}</p>

// // // //       {/* Payment disabled temporarily */}
// // // //       <button>Enroll</button>
// // // //     </div>
// // // //   );
// // // // }


// // // export default function CourseCard({ course, enroll }) {
// // //   return (
// // //     <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
// // //       <h3>{course.title}</h3>
// // //       <p>{course.description}</p>
// // //       <p>₹{course.price}</p>

// // //       {/* ✅ Connect button to enroll function */}
// // //       <button onClick={enroll}>
// // //         Enroll
// // //       </button>
// // //     </div>
// // //   );
// // // }

// // export default function CourseCard({ course, enroll }) {
// //   return (
// //     <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
// //       <h3>{course.title}</h3>
// //       <p>{course.description}</p>
// //       <p><strong>Price:</strong> ₹{course.price}</p>
// //       <p><strong>Duration:</strong> {course.duration}</p>

// //       <p><strong>Instructor:</strong> {course.instructor?.name}</p>
// //       <p><strong>Qualification:</strong> {course.instructor?.qualification}</p>

// //       <button onClick={enroll}>Enroll</button>
// //     </div>
// //   );
// // }

// export default function CourseCard({ course, enroll }) {
//   const styles = {
//     card: {
//       background: "#ffffff",
//       borderRadius: "15px",
//       padding: "20px",
//       boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
//       transition: "0.3s ease",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "space-between",
//       minHeight: "280px",
//     },
//     title: {
//       fontSize: "18px",
//       fontWeight: "600",
//       marginBottom: "8px",
//       color: "#1f2937",
//     },
//     description: {
//       fontSize: "14px",
//       color: "#6b7280",
//       marginBottom: "10px",
//     },
//     meta: {
//       fontSize: "13px",
//       color: "#374151",
//       marginBottom: "6px",
//     },
//     price: {
//       fontWeight: "600",
//       color: "#4f46e5",
//       marginBottom: "10px",
//     },
//     button: {
//       marginTop: "auto",
//       padding: "10px",
//       borderRadius: "8px",
//       border: "none",
//       backgroundColor: "#120f4c",
//       color: "white",
//       fontSize: "14px",
//       cursor: "pointer",
//       transition: "0.3s",
//     },
//   };

//   return (
//     <div
//       style={styles.card}
//       onMouseEnter={(e) =>
//         (e.currentTarget.style.boxShadow =
//           "0 12px 30px rgba(0,0,0,0.15)")
//       }
//       onMouseLeave={(e) =>
//         (e.currentTarget.style.boxShadow =
//           "0 8px 20px rgba(0,0,0,0.08)")
//       }
//     >
//       <h3 style={styles.title}>{course.title}</h3>

//       <p style={styles.description}>{course.description}</p>

//       <p style={styles.price}>₹{course.price}</p>

//       <p style={styles.meta}>
//         <strong>Duration:</strong> {course.duration}
//       </p>

//       <p style={styles.meta}>
//         <strong>Instructor:</strong> {course.instructor?.name}
//       </p>

//       <p style={styles.meta}>
//         <strong>Qualification:</strong> {course.instructor?.qualification}
//       </p>

//       <button
//         style={styles.button}
//         onClick={enroll}
//         onMouseEnter={(e) =>
//           (e.target.style.backgroundColor = "#4f46e5")
//         }
//         onMouseLeave={(e) =>
//           (e.target.style.backgroundColor = "#120f4c")
//         }
//       >
//         Enroll Now
//       </button>
//     </div>
//   );
// }

import "../css/CourseCard.css";
import studyImg from "../assets/learn.svg";
export default function CourseCard({ course, enroll }) {
  return (
    <div className="course-card">
       <img src={studyImg} alt="course" className="course-img" />
      <div className="card-content">
        <h3>{course.title}</h3>
        <p className="desc">{course.description}</p>

        <p className="price">₹{course.price}</p>

        <div className="details">
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Instructor:</strong> {course.instructor?.name}</p>
          <p><strong>Qualification:</strong> {course.instructor?.qualification}</p>
        </div>
      </div>

      <button onClick={enroll}>Enroll Now</button>
    </div>
  );
}
// // // // // // import { useEffect, useState } from "react";
// // // // // // import api from "../services/api";
// // // // // // import CourseCard from "../components/CourseCard";

// // // // // // export default function Courses() {
// // // // // //   const [courses, setCourses] = useState([]);

// // // // // //   useEffect(() => {
// // // // // //     api.get("/courses").then(res => setCourses(res.data));
// // // // // //   }, []);

// // // // // //   const enroll = async (course) => {
// // // // // //     const user = JSON.parse(localStorage.getItem("user"));
// // // // // //     await api.post("/enroll", { userId: user._id, courseId: course._id });
// // // // // //     alert("Enrolled");
// // // // // //   };

// // // // // //   return courses.map(c => <CourseCard key={c._id} course={c} enroll={enroll} />);
// // // // // // }

// // // // // import { useEffect, useState } from "react";
// // // // // import api from "../services/api";
// // // // // import CourseCard from "../components/CourseCard";

// // // // // export default function Courses() {
// // // // //   const [courses, setCourses] = useState([]);

// // // // //   useEffect(() => {
// // // // //     api.get("/courses")
// // // // //       .then(res => setCourses(res.data))
// // // // //       .catch(err => console.error(err));
// // // // //   }, []);

// // // // //   return (
// // // // //     <div>
// // // // //       <h2>Courses</h2>

// // // // //       {courses.length === 0 && <p>No courses available</p>}

// // // // //       {courses.map(course => (
// // // // //         <CourseCard key={course._id} course={course} />
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import { useEffect, useState } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import api from "../services/api";
// // // // import CourseCard from "../components/CourseCard";

// // // // export default function Courses() {
// // // //   const [courses, setCourses] = useState([]);
// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     api
// // // //       .get("/courses")
// // // //       .then((res) => setCourses(res.data))
// // // //       .catch((err) => console.error(err));
// // // //   }, []);

// // // //   const handleEnroll = (course) => {
// // // //     const token = localStorage.getItem("token");
// // // //     if (!token) {
// // // //       if (window.confirm("You need an account to enroll. Sign in now?")) {
// // // //         navigate("/login");
// // // //       }
// // // //       return;
// // // //     }

// // // //     // Call enroll API
// // // //     const user = JSON.parse(localStorage.getItem("user"));
// // // //     api
// // // //       .post("/enroll", { userId: user._id, courseId: course._id })
// // // //       .then(() => {
// // // //         alert("Enrolled successfully!");
// // // //         navigate("/my-courses"); // optional: go to MyCourses page after enrollment
// // // //       })
// // // //       .catch((err) => {
// // // //         console.error(err);
// // // //         alert("Enrollment failed");
// // // //       });
// // // //   };

// // // //   return (
// // // //     <div className="container mx-auto p-6">
// // // //       <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
// // // //         Courses
// // // //       </h2>

// // // //       {courses.length === 0 && (
// // // //         <p className="text-center text-gray-500">No courses available</p>
// // // //       )}

// // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // //         {courses.map((course) => (
// // // //           <CourseCard
// // // //             key={course._id}
// // // //             course={course}
// // // //             enroll={() => handleEnroll(course)}
// // // //           />
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // import { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import api from "../services/api";
// // // import CourseCard from "../components/CourseCard";
// // // import { loadStripe } from "@stripe/stripe-js";

// // // const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
// // // export default function Courses() {
// // //   const [courses, setCourses] = useState([]);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     api
// // //       .get("/courses")
// // //       .then((res) => setCourses(res.data))
// // //       .catch((err) => console.error(err));
// // //   }, []);

// // //   // const handleEnroll = (course) => {
// // //   //   const token = localStorage.getItem("token");
// // //   //   if (!token) {
// // //   //     if (window.confirm("You need an account to enroll. Sign in now?")) {
// // //   //       navigate("/login");
// // //   //     }
// // //   //     return;
// // //   //   }

// // //   //   const user = JSON.parse(localStorage.getItem("user"));
// // //   //   api
// // //   //     .post("/enroll", { userId: user._id, courseId: course._id })
// // //   //     .then(() => {
// // //   //       alert("Enrolled successfully!");
// // //   //       // navigate("/my-courses");
// // //   //       navigate("/user/my-courses");
// // //   //     })
// // //   //     .catch((err) => {
// // //   //       console.error(err);
// // //   //       alert("Enrollment failed");
// // //   //     });
// // //   // };
// // // // const handleEnroll = async (course) => {
// // // //   try {
// // // //     await api.post("/enroll", {
// // // //       courseId: course._id   // ✅ only courseId
// // // //     });

// // // //     alert("Enrolled successfully!");
// // // //   } catch (err) {
// // // //     console.error("Enroll error:", err.response?.data || err.message);
// // // //     alert("Enrollment failed");
// // // //   }
// // // // };

// // // // const handleEnroll = async (course) => {
// // // //   const token = localStorage.getItem("token");

// // // //   if (!token) {
// // // //     if (window.confirm("You need to login to purchase. Login now?")) {
// // // //       navigate("/login");
// // // //     }
// // // //     return;
// // // //   }

// // // //   try {
// // // //     const stripe = await stripePromise;

// // // //     const response = await api.post(
// // // //       "/payment/create-checkout-session",
// // // //       {
// // // //         courseId: course._id,
// // // //       }
// // // //     );

// // // //     await stripe.redirectToCheckout({
// // // //       sessionId: response.data.id,
// // // //     });
// // // //   } catch (error) {
// // // //     console.error("Payment error:", error);
// // // //     alert("Payment failed");
// // // //   }
// // // // };
// // // const handleEnroll = async (course) => {
// // //   const token = localStorage.getItem("token");

// // //   if (!token) {
// // //     if (window.confirm("Please login to continue.")) {
// // //       navigate("/login");
// // //     }
// // //     return;
// // //   }

// // //   try {
// // //     const response = await api.post(
// // //       "/payment/create-checkout-session",
// // //       { courseId: course._id }
// // //     );

// // //     window.location.href = response.data.url;

// // //   } catch (error) {
// // //     console.error("Payment error:", error);
// // //     alert("Payment failed");
// // //   }
// // // };

// // //   return (
// // //     <div
// // //       style={{
// // //         maxWidth: "1200px",
// // //         margin: "0 auto",
// // //         padding: "20px",
// // //         textAlign: "center",
// // //       }}
// // //     >
// // //       <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#1d4ed8" }}>
// // //         Courses
// // //       </h2>

// // //       {courses.length === 0 && (
// // //         <p style={{ color: "#6b7280" }}>No courses available</p>
// // //       )}

// // //       <div
// // //         style={{
// // //           display: "grid",
// // //           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
// // //           gap: "20px",
// // //         }}
// // //       >
// // //         {courses.map((course) => (
// // //           <CourseCard
// // //             key={course._id}
// // //             course={course}
// // //             enroll={() => handleEnroll(course)}
// // //           />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }




// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import api from "../services/api";
// // import CourseCard from "../components/CourseCard";

// // export default function Courses() {
// //   const [courses, setCourses] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     api
// //       .get("/courses")
// //       .then((res) => setCourses(res.data))
// //       .catch((err) => console.error(err));
// //   }, []);

// //   const handleEnroll = async (course) => {
// //     const token = localStorage.getItem("token");

// //     if (!token) {
// //       if (window.confirm("Please login to continue.")) {
// //         navigate("/login");
// //       }
// //       return;
// //     }

// //     try {
// //       const response = await api.post(
// //         "/payment/create-checkout-session",
// //         { courseId: course._id }
// //       );

// //       window.location.href = response.data.url;
// //     } catch (error) {
// //       console.error("Payment error:", error);
// //       alert("Payment failed");
// //     }
// //   };

// //   // 🔍 Filter courses based on search
// //   const filteredCourses = courses.filter((course) =>
// //     course.title.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div
// //       style={{
// //         maxWidth: "1200px",
// //         margin: "0 auto",
// //         padding: "20px",
// //         textAlign: "center",
// //       }}
// //     >
// //       <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#1d4ed8" }}>
// //         Courses
// //       </h2>

// //       {/* 🔍 SEARCH BAR */}
// //       <input
// //         type="text"
// //         placeholder="Search courses..."
// //         value={searchTerm}
// //         onChange={(e) => setSearchTerm(e.target.value)}
// //         style={{
// //           padding: "10px",
// //           width: "300px",
// //           marginBottom: "20px",
// //           borderRadius: "8px",
// //           border: "1px solid #ccc",
// //         }}
// //       />

// //       {filteredCourses.length === 0 && (
// //         <p style={{ color: "#6b7280" }}>No courses found</p>
// //       )}

// //       <div
// //         style={{
// //           display: "grid",
// //           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
// //           gap: "20px",
// //         }}
// //       >
// //         {filteredCourses.map((course) => (
// //           <CourseCard
// //             key={course._id}
// //             course={course}
// //             enroll={() => handleEnroll(course)}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../services/api";
// import CourseCard from "../components/CourseCard";
// import "../css/Courses.css";
// export default function Courses() {
//   const [courses, setCourses] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     api
//       .get("/courses")
//       .then((res) => setCourses(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   const handleEnroll = async (course) => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       if (window.confirm("Please login to continue.")) {
//         navigate("/login");
//       }
//       return;
//     }

//     try {
//       const response = await api.post(
//         "/payment/create-checkout-session",
//         { courseId: course._id }
//       );

//       window.location.href = response.data.url;
//     } catch (error) {
//   if (error.response?.status === 400) {
//     alert("Already enrolled in this course.");
//   } else {
//     alert("Payment failed");
//   }
// }
    
//     // catch (error) {
//     //   console.error("Payment error:", error);
//     //   alert("Payment failed");
//     // }
    
//   };

//   // 🔍 Search by Title OR Instructor
//   const filteredCourses = courses.filter((course) => {
//     const titleMatch = course.title
//       ?.toLowerCase()
//       .includes(searchTerm.toLowerCase());

//     const instructorMatch = course.instructor?.name
//       ?.toLowerCase()
//       .includes(searchTerm.toLowerCase());

//     return titleMatch || instructorMatch;
//   });

//   // return (
//   //   <div
//   //     style={{
//   //       maxWidth: "1200px",
//   //       margin: "0 auto",
//   //       padding: "20px",
//   //       textAlign: "center",
//   //     }}
//   //   >
//   //     <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#1d4ed8" }}>
//   //       Courses
//   //     </h2>

//   //     {/* 🔍 SEARCH BAR */}
//   //     <input
//   //       type="text"
//   //       placeholder="Search by title or instructor..."
//   //       value={searchTerm}
//   //       onChange={(e) => setSearchTerm(e.target.value)}
//   //       style={{
//   //         padding: "10px",
//   //         width: "300px",
//   //         marginBottom: "20px",
//   //         borderRadius: "8px",
//   //         border: "1px solid #ccc",
//   //       }}
//   //     />

//   //     {filteredCourses.length === 0 && (
//   //       <p style={{ color: "#6b7280" }}>No courses found</p>
//   //     )}

//   //     <div
//   //       style={{
//   //         display: "grid",
//   //         gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//   //         gap: "20px",
//   //       }}
//   //     >
//   //       {filteredCourses.map((course) => (
//   //         <CourseCard
//   //           key={course._id}
//   //           course={course}
//   //           enroll={() => handleEnroll(course)}
//   //         />
//   //       ))}
//   //     </div>
//   //   </div>
//   // );

//   return (
//   <div className="courses-container">
//     <h2 className="courses-title">COURSES</h2>

//     <input
//       type="text"
//       placeholder="Search by title or instructor..."
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//       className="search-input"
//     />

//     {filteredCourses.length === 0 && (
//       <p className="no-courses">No courses found</p>
//     )}

//     <div className="courses-grid">
//       {filteredCourses.map((course) => (
//         <CourseCard
//           key={course._id}
//           course={course}
//           enroll={() => handleEnroll(course)}
//         />
//       ))}
//     </div>
//   </div>
// );
// }



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import CourseCard from "../components/CourseCard";
import "../css/Courses.css";
import studyImg from "../assets/hero1.svg";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleEnroll = async (course) => {
    const token = localStorage.getItem("token");

    if (!token) {
      if (window.confirm("Please login to continue.")) {
        navigate("/login");
      }
      return;
    }

    try {
      const response = await api.post(
        "/payment/create-checkout-session",
        { courseId: course._id }
      );

      window.location.href = response.data.url;
    } catch (error) {
      if (error.response?.status === 400) {
        alert("Already enrolled in this course.");
      } else {
        alert("Payment failed");
      }
    }
  };

  const filteredCourses = courses.filter((course) => {
    const search = searchTerm.toLowerCase();
    return (
      course.title?.toLowerCase().includes(search) ||
      course.instructor?.name?.toLowerCase().includes(search)
    );
  });

  return (
    <div className="courses-container">
     <img src={studyImg} alt="study" className="course-img" />
      <h1 className="courses-title">Explore Courses</h1>

      <input
        type="text"
        placeholder="🔍 Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {filteredCourses.length === 0 && (
        <p className="no-courses">No courses found</p>
      )}

      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course._id}
            course={course}
            enroll={() => handleEnroll(course)}
          />
        ))}
      </div>
    </div>
  );
}
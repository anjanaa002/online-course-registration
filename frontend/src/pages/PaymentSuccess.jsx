// // // // import { Link } from "react-router-dom";

// // // // export default function PaymentSuccess() {
// // // //   return (
// // // //     <div style={{ textAlign: "center", marginTop: "50px" }}>
// // // //       <h1>Payment Successful 🎉</h1>
// // // //       <p>You have successfully enrolled in the course.</p>

// // // //       <Link to="/my-courses">
// // // //         <button>Go to My Courses</button>
// // // //       </Link>
// // // //     </div>
// // // //   );
// // // // }


// // // import { useEffect } from "react";
// // // import { useSearchParams, useNavigate } from "react-router-dom";
// // // import api from "../services/api";

// // // export default function PaymentSuccess() {
// // //   const [searchParams] = useSearchParams();
// // //   const navigate = useNavigate();
// // //   const courseId = searchParams.get("courseId");

// // //   useEffect(() => {
// // //     const enrollCourse = async () => {
// // //       try {
// // //         await api.post("/enroll", { courseId });
// // //         alert("Payment successful & enrolled!");
// // //         navigate("/user/my-courses");
// // //       } catch (error) {
// // //         console.error(error);
// // //       }
// // //     };

// // //     if (courseId) enrollCourse();
// // //   }, []);

// // //   return <h2>Processing Payment...</h2>;
// // // }

// // import { useEffect } from "react";
// // import { useSearchParams, useNavigate } from "react-router-dom";
// // import api from "../services/api";

// // export default function PaymentSuccess() {
// //   const [searchParams] = useSearchParams();
// //   const navigate = useNavigate();
// //   const courseId = searchParams.get("courseId");

// //   useEffect(() => {
// //     const enrollCourse = async () => {
// //       try {
// //         await api.post("/enroll", { courseId });
// //         alert("Payment successful! You are enrolled.");
// //         navigate("/user/my-courses");
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     if (courseId) enrollCourse();
// //   }, []);

// //   return <h2>Processing payment...</h2>;
// // }

// import { useEffect, useRef } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import api from "../services/api";

// export default function PaymentSuccess() {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const courseId = searchParams.get("courseId");

//   const hasEnrolled = useRef(false); // ✅ prevents double call

//   useEffect(() => {
//     const enrollCourse = async () => {
//       if (hasEnrolled.current) return; // ✅ stop if already called
//       hasEnrolled.current = true;

//       try {
//         await api.post("/enroll", { courseId });
//         alert("Payment successful! You are enrolled.");
//         navigate("/user/my-courses");
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     if (courseId) enrollCourse();
//   }, [courseId, navigate]);

//   return <h2>Processing payment...</h2>;
// }

import { useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const courseId = searchParams.get("courseId");
  const hasEnrolled = useRef(false);

  useEffect(() => {
    const enrollCourse = async () => {
      if (hasEnrolled.current) return;
      hasEnrolled.current = true;

      try {
        const res = await api.post("/enroll", { courseId });

        alert(res.data.msg); // ✅ show backend message
        navigate("/user/my-courses");

      } catch (error) {
        if (error.response?.status === 400) {
          alert("Already enrolled in this course.");
          navigate("/user/my-courses");
        } else {
          alert("Something went wrong");
        }
      }
    };

    if (courseId) enrollCourse();
  }, [courseId, navigate]);

  return <h2>Processing payment...</h2>;
}
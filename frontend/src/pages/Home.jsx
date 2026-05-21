// // // // import { useNavigate } from "react-router-dom";
// // // // import Navbar from "../components/Navbar";
// // // // import { FaChalkboardTeacher, FaClock, FaCertificate } from "react-icons/fa"; // icons

// // // // export default function Home() {
// // // //   const navigate = useNavigate();

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col">
      
// // // //       {/* Navbar */}
// // // //       <Navbar />

// // // //       {/* Hero Section */}
// // // //       <section className="flex flex-col items-center justify-center text-center mt-16 px-4">
// // // //         <h1 className="text-5xl font-bold mb-4 text-blue-800">
// // // //           Welcome to CourseHub
// // // //         </h1>
// // // //         <p className="text-xl text-gray-700 mb-6 max-w-xl">
// // // //           Learn new skills online anytime, anywhere! Explore expert-led courses and grow your career.
// // // //         </p>
// // // //         <div className="space-x-4">
// // // //           <button
// // // //             onClick={() => navigate("/login")}
// // // //             className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
// // // //           >
// // // //             Get Started
// // // //           </button>
// // // //           <button
// // // //             onClick={() => navigate("/about")}
// // // //             className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition"
// // // //           >
// // // //             Learn More
// // // //           </button>
// // // //         </div>
// // // //       </section>

// // // //       {/* Features Section */}
// // // //       <section className="mt-16 text-center px-4">
// // // //         <h2 className="text-3xl font-semibold mb-8 text-blue-600">Why Choose CourseHub?</h2>

// // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
// // // //           <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition flex flex-col items-center">
// // // //             <FaChalkboardTeacher className="text-blue-600 text-4xl mb-4" />
// // // //             <h3 className="text-xl font-bold mb-2">Expert Courses</h3>
// // // //             <p className="text-gray-600 text-center">
// // // //               High-quality courses taught by industry experts.
// // // //             </p>
// // // //           </div>

// // // //           <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition flex flex-col items-center">
// // // //             <FaClock className="text-blue-600 text-4xl mb-4" />
// // // //             <h3 className="text-xl font-bold mb-2">Flexible Learning</h3>
// // // //             <p className="text-gray-600 text-center">
// // // //               Learn at your own pace anytime, anywhere.
// // // //             </p>
// // // //           </div>

// // // //           <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition flex flex-col items-center">
// // // //             <FaCertificate className="text-blue-600 text-4xl mb-4" />
// // // //             <h3 className="text-xl font-bold mb-2">Certificates</h3>
// // // //             <p className="text-gray-600 text-center">
// // // //               Earn certificates to showcase your achievements.
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Footer */}
// // // //       <footer className="mt-16 bg-blue-600 text-white p-6 text-center">
// // // //         &copy; 2026 CourseHub. All rights reserved.
// // // //       </footer>
// // // //     </div>
// // // //   );
// // // // }


// // // import { useNavigate } from "react-router-dom";
// // // import Navbar from "../components/Navbar";
// // // import { FaChalkboardTeacher, FaClock, FaCertificate } from "react-icons/fa";

// // // export default function Home() {
// // //   const navigate = useNavigate();

// // //   return (
// // //     <div className="min-h-screen flex flex-col">
// // //       {/* Navbar */}
// // //       <Navbar />

// // //       {/* Hero Section */}
// // //       <section className="bg-gradient-to-r from-blue-400 to-blue-600 text-white flex flex-col items-center justify-center text-center py-24 px-4">
// // //         <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
// // //           Welcome to CourseHub
// // //         </h1>
// // //         <p className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md">
// // //           Learn new skills online anytime, anywhere!
// // //         </p>
// // //         <div className="flex flex-col sm:flex-row gap-4">
// // //           <button
// // //             onClick={() => navigate("/login")}
// // //             className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
// // //           >
// // //             Get Started
// // //           </button>
// // //           <button
// // //             onClick={() => navigate("/about")}
// // //             className="bg-blue-800 bg-opacity-30 text-white px-6 py-3 rounded-lg shadow hover:bg-opacity-40 transition"
// // //           >
// // //             Learn More
// // //           </button>
// // //         </div>
// // //       </section>

// // //       {/* Features Section */}
// // //       <section className="py-16 px-4 text-center">
// // //         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-600">
// // //           Why Choose CourseHub?
// // //         </h2>
// // //         <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg">
// // //           Learn from expert instructors, track your progress, and gain skills
// // //           that matter. Flexible, easy-to-access courses designed for your
// // //           growth.
// // //         </p>

// // //         {/* Feature Cards */}
// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
// // //           <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transform transition">
// // //             <FaChalkboardTeacher className="text-blue-600 text-5xl mb-4" />
// // //             <h3 className="text-xl font-bold mb-2">Expert Courses</h3>
// // //             <p className="text-gray-600">
// // //               High-quality courses taught by industry experts.
// // //             </p>
// // //           </div>

// // //           <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transform transition">
// // //             <FaClock className="text-blue-600 text-5xl mb-4" />
// // //             <h3 className="text-xl font-bold mb-2">Flexible Learning</h3>
// // //             <p className="text-gray-600">
// // //               Learn at your own pace anytime, anywhere.
// // //             </p>
// // //           </div>

// // //           <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transform transition">
// // //             <FaCertificate className="text-blue-600 text-5xl mb-4" />
// // //             <h3 className="text-xl font-bold mb-2">Certificates</h3>
// // //             <p className="text-gray-600">
// // //               Earn certificates to showcase your achievements.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Footer */}
// // //       <footer className="bg-blue-600 text-white py-6 text-center mt-auto">
// // //         &copy; 2026 CourseHub. All rights reserved.
// // //       </footer>
// // //     </div>
// // //   );
// // // }
// // import { useNavigate } from "react-router-dom";
// // import Navbar from "../components/Navbar";
// // import { FaChalkboardTeacher, FaClock, FaCertificate } from "react-icons/fa";
// // import HeroImage from "../assets/hero.png"; // <-- you can download an image and place it here

// // export default function Home() {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="flex flex-col min-h-screen bg-gray-100">
// //       {/* Navbar */}
// //       <Navbar />

// //       {/* Hero Section with Image */}
// //       <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 px-4">
// //         <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          
// //           {/* Text */}
// //           <div className="flex-1 text-center md:text-left">
// //             <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
// //               Welcome to CourseHub
// //             </h1>
// //             <p className="text-lg md:text-xl mb-8 max-w-lg drop-shadow-md">
// //               Learn new skills online anytime, anywhere! Explore expert-led courses and grow your career.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
// //               <button
// //                 onClick={() => navigate("/login")}
// //                 className="bg-white text-blue-700 px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition"
// //               >
// //                 Get Started
// //               </button>
// //               <button
// //                 onClick={() => navigate("/about")}
// //                 className="bg-blue-800 bg-opacity-30 text-white px-8 py-3 rounded-lg shadow hover:bg-opacity-40 transition"
// //               >
// //                 Learn More
// //               </button>
// //             </div>
// //           </div>

// //           {/* Image */}
// //           <div className="flex-1">
// //             {/* <img
// //               src={HeroImage}
// //               alt="Learning illustration"
// //               className="w-full max-w-md mx-auto"
// //             /> */}
// //             <img
// //   src={HeroImage}
// //   alt="Learning illustration"
// //   width={400}
// //   height={400}
// // />

// //           </div>
// //         </div>
// //       </section>

// //       {/* Features Section */}
// //       <section className="py-16 px-4 text-center">
// //         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
// //           Why Choose CourseHub?
// //         </h2>
// //         <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg">
// //           Learn from expert instructors, track your progress, and gain skills
// //           that matter. Flexible, easy-to-access courses designed for your
// //           growth.
// //         </p>

// //         {/* Feature Cards */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
// //           <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transform transition">
// //             <FaChalkboardTeacher className="text-blue-600 text-5xl mb-4" />
// //             <h3 className="text-xl font-bold mb-2">Expert Courses</h3>
// //             <p className="text-gray-600">
// //               High-quality courses taught by industry experts.
// //             </p>
// //           </div>

// //           <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transform transition">
// //             <FaClock className="text-blue-600 text-5xl mb-4" />
// //             <h3 className="text-xl font-bold mb-2">Flexible Learning</h3>
// //             <p className="text-gray-600">
// //               Learn at your own pace anytime, anywhere.
// //             </p>
// //           </div>

// //           <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transform transition">
// //             <FaCertificate className="text-blue-600 text-5xl mb-4" />
// //             <h3 className="text-xl font-bold mb-2">Certificates</h3>
// //             <p className="text-gray-600">
// //               Earn certificates to showcase your achievements.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="bg-blue-700 text-white py-6 text-center mt-auto">
// //         &copy; 2026 CourseHub. All rights reserved.
// //       </footer>
// //     </div>
// //   );
// // }


// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import { FaChalkboardTeacher, FaClock, FaCertificate } from "react-icons/fa";
// import HeroImage from "../assets/hero.png"; // your hero image

// export default function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">

//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-24 px-4">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
          
//           {/* Text */}
//           <div className="flex-1 text-center md:text-left">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//               Welcome to CourseHub
//             </h1>
//             <p className="text-lg md:text-xl mb-8 max-w-lg">
//               Learn new skills online anytime, anywhere! Explore expert-led courses and grow your career.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//               <button
//                 onClick={() => navigate("/login")}
//                 className="bg-white text-blue-700 px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition"
//               >
//                 Get Started
//               </button>
//               <button
//                 onClick={() => navigate("/about")}
//                 className="bg-blue-800 bg-opacity-30 text-white px-8 py-3 rounded-lg shadow hover:bg-opacity-40 transition"
//               >
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* Hero Image */}
//           <div className="flex-1 flex justify-center md:justify-end">
//             <img
//               src={HeroImage}
//               alt="Learning illustration"
//               className="w-80 md:w-96 rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-4 text-center bg-gray-100">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">
//           Why Choose CourseHub?
//         </h2>
//         <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg">
//           Learn from expert instructors, track your progress, and gain skills that matter. Flexible, easy-to-access courses designed for your growth.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transform transition">
//             <FaChalkboardTeacher className="text-blue-600 text-5xl mb-4" />
//             <h3 className="text-xl font-bold mb-2">Expert Courses</h3>
//             <p className="text-gray-600">
//               High-quality courses taught by industry experts.
//             </p>
//           </div>

//           <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transform transition">
//             <FaClock className="text-blue-600 text-5xl mb-4" />
//             <h3 className="text-xl font-bold mb-2">Flexible Learning</h3>
//             <p className="text-gray-600">
//               Learn at your own pace anytime, anywhere.
//             </p>
//           </div>

//           <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transform transition">
//             <FaCertificate className="text-blue-600 text-5xl mb-4" />
//             <h3 className="text-xl font-bold mb-2">Certificates</h3>
//             <p className="text-gray-600">
//               Earn certificates to showcase your achievements.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-blue-700 text-white py-6 text-center mt-auto">
//         &copy; 2026 CourseHub. All rights reserved.
//       </footer>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaChalkboardTeacher, FaClock, FaCertificate } from "react-icons/fa";
import HeroImage from "../assets/hero.png";
import "../css/Home.css";
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">

          <div className="hero-text">
            <h1>Welcome to CourseHub</h1>
            <p>
              Learn new skills online anytime, anywhere! Explore expert-led
              courses and grow your career.
            </p>

            <div className="hero-buttons">
              <button onClick={() => navigate("/login")} className="btn-primary">
                Get Started
              </button>
              <button onClick={() => navigate("/about")} className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>

          <div className="hero-image">
            <img src={HeroImage} alt="Learning" />
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Choose CourseHub?</h2>
        <p className="features-desc">
          Learn from expert instructors, track your progress, and gain skills
          that matter.
        </p>

        <div className="feature-cards">
          <div className="card">
            <FaChalkboardTeacher className="icon" />
            <h3>Expert Courses</h3>
            <p>High-quality courses taught by industry experts.</p>
          </div>

          <div className="card">
            <FaClock className="icon" />
            <h3>Flexible Learning</h3>
            <p>Learn at your own pace anytime, anywhere.</p>
          </div>

          <div className="card">
            <FaCertificate className="icon" />
            <h3>Certificates</h3>
            <p>Earn certificates to showcase your achievements.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 CourseHub. All rights reserved.
      </footer>

    </div>
  );
}


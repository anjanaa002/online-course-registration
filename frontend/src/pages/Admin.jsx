// export default function Admin() {
//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <p>Add / Edit Courses Here</p>
//     </div>
//   );
// }
import { useLocation } from "react-router-dom";

export default function Admin() {
  const location = useLocation();

  return (
    <div>
      <h2>Admin Section</h2>
      <p>Current page: {location.pathname}</p>
    </div>
  );
}

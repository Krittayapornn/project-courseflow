import { Routes, Route } from "react-router-dom";
import Login from "./non-authorized/loginpage";
import Coursedetail from "./non-authorized/coursedetail";
import HomePage from "./non-authorized/homepage";
import LoginAdmin from "./admin/login-admin";;
import AddCourseAdmin from "./admin/addcourse-admin";
import Register from "./non-authorized/registerpage";;
import UserMycourse from "./authorized/user-mycourse";
import UserMycourse from "./authorized/user-mycourse";

function AuthenticatedApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/coursedetail" element={<Coursedetail />} />
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/admin/addcourse" element={<AddCourseAdmin />} />
        {/* Test path */}
        <Route path="/user/my_course" element={<UserMycourse />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;

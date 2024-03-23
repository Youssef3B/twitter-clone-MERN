import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AllUsers from "./pages/AllUsers";
import AllSaves from "./pages/AllSaves";
import EditPost from "./pages/EditPost";
import EditProfile from "./pages/EditProfile";
import PostDetails from "./pages/PostDetails";
import Profile from "./pages/Profile";
import LoginLayout from "./components/LoginLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/allusers" element={<AllUsers />} />
            <Route path="/allsaves" element={<AllSaves />} />
            <Route path="/editpost" element={<EditPost />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/postdetails" element={<PostDetails />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route element={<LoginLayout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

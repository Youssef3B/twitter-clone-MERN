import { AiFillHome } from "react-icons/ai";
import { FaBookmark, FaUser } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { IoLogOut } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="hidden lg:block fixed h-full px-16 py-12">
      <h2 className="mb-10">
        <FaTwitter style={{ fontSize: "32px" }} />
      </h2>
      <ul className="flex flex-col space-y-10">
        <Link to={"/"}>
          <li className="flex items-center space-x-2 cursor-pointer text-xl transition hover:text-blue-300">
            <AiFillHome /> <span>Home</span>
          </li>
        </Link>
        <Link to={"/profile"}>
          <li className="flex items-center space-x-2 cursor-pointer text-xl transition hover:text-blue-300">
            <FaUser /> <span>Profile</span>
          </li>
        </Link>
        <Link to={"allsaves"}>
          <li className="flex items-center space-x-2 cursor-pointer text-xl transition hover:text-blue-300">
            <FaBookmark />
            <span>My Saves</span>
          </li>
        </Link>
        <Link to={"allusers"}>
          <li className="flex items-center space-x-2 cursor-pointer text-xl transition hover:text-blue-300">
            <HiUsers /> <span>All Users</span>
          </li>
        </Link>
        <Link to={"register"}>
          <li className="flex items-center space-x-2 cursor-pointer text-xl transition hover:text-blue-300">
            <IoLogOut /> <span>Log Out</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
export default Navbar;

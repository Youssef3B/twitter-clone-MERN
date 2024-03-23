import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { FaBookmark } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

function NavbarPhone() {
  return (
    <div className="lg:hidden fixed bottom-0 bg-zinc-900 w-full border-t text-white  border-t-slate-50">
      <ul className="flex justify-between px-4 py-4">
        <li className="flex items-center space-x-1 cursor-pointer">
          <AiFillHome /> <span>Home</span>
        </li>
        <li className="flex items-center space-x-1 cursor-pointer">
          <FaUser /> <span>Profile</span>
        </li>
        <li className="flex items-center space-x-1 cursor-pointer">
          <FaBookmark />
          <span>My Saves</span>
        </li>
        <li className="flex items-center space-x-1 cursor-pointer">
          <HiUsers /> <span>All Users</span>
        </li>
        <li className="flex items-center space-x-1 cursor-pointer">
          <IoLogOut /> <span>Log Out</span>
        </li>
      </ul>
    </div>
  );
}
export default NavbarPhone;

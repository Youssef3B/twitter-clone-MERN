import axios from "axios";
import UserCard from "../components/UserCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllUsers() {
  const [users, setUsers] = useState("");
  async function getAllUsers() {
    const { data } = await axios.get("http://localhost:4500/api/users");
    if (data) {
      setUsers(data);
    }
  }
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className="border border-stone-800 p-4 col-span-3 lg:col-span-2 space-y-6 h-[100vh]">
      <h2 className="font-bold text-3xl">All Users</h2>
      <div>
        <input
          className="w-full p-2 bg-slate-900 outline-none"
          type="text"
          placeholder="Search for an User"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {users &&
          users.map((user) => (
            <Link to={`/profile/${user._id}`} key={user._id}>
              <UserCard user={user} />
            </Link>
          ))}
      </div>
    </div>
  );
}
export default AllUsers;

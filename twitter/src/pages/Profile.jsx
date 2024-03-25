import { CiCalendar } from "react-icons/ci";
import Post from "../components/HomeItems/Post";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState();
  console.log(id);
  async function GetUser() {
    try {
      const { data } = await axios.get(`http://localhost:4500/api/user/${id}`);
      if (data) {
        setUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    GetUser();
  }, []);
  console.log(user);
  return (
    <div className="border border-stone-800 p-4 col-span-3 lg:col-span-2 space-y-6 ">
      <div className="relative mb-24">
        <img
          className="w-full h-64 object-cover object-center"
          src={
            user && user.banner === null
              ? "../uploads/bannerdefault.png"
              : `../uploads/${user && user.banner}`
          }
          alt="banner"
        />

        <div className="absolute bottom-[-70px] left-4 border-4 border-black rounded-full">
          <img
            className="w-32 h-32 rounded-full object-cover object-center"
            src={
              user && user.avatar === null
                ? "../uploads/default.jpg"
                : `../uploads/${user && user.avatar}`
            }
            alt=""
          />
        </div>
        {id === localStorage.getItem("id") && (
          <Link to={`/editprofile/${id}`}>
            <button className="float-right bg-white text-black font-bold py-2 px-8 rounded-full mt-3 cursor-pointer transition-all hover:bg-blue-400 hover:text-white">
              Edit
            </button>
          </Link>
        )}
      </div>

      <div className="">
        <h3 className="text-3xl font-bold mb-1">{user && user.name}</h3>
        <span className="text-gray-400">@{user && user.username}</span>
        <h4 className="mt-3 font-semibold">
          {user && user.bio === null
            ? "This User Has No Bio"
            : user && user.bio}
        </h4>
        <p className="flex items-center space-x-3 mt-4 text-gray-400 font-semibold text-lg">
          <CiCalendar fontSize={"24px"} />
          <span>Joined March 2024</span>
        </p>
        <div className="flex items-center space-x-4 mt-4 mb-10">
          <p>
            2 <span className="text-gray-400">Following</span>
          </p>
          <p>
            2 <span className="text-gray-400">Following</span>
          </p>
        </div>
        <Post />
        <Post />
      </div>
    </div>
  );
}
export default Profile;

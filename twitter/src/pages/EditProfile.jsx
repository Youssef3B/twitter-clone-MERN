import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function EditProfile() {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [banner, setBanner] = useState(null);

  const navigate = useNavigate();

  async function getUser() {
    try {
      const { data } = await axios.get(`http://localhost:4500/api/user/${id}`);
      if (data) {
        setUser(data);
        setName(data.name);
        setUsername(data.username);
        setEmail(data.email);
        setBio(data.bio);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function updateUser(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("username", username);
      formData.append("email", email);
      formData.append("bio", bio);
      if (avatar) {
        formData.append("avatar", avatar);
      }
      if (banner) {
        formData.append("banner", banner);
      }

      const { data } = await axios.put(
        `http://localhost:4500/api/user/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data.error) {
        console.log("Error updating user");
      } else {
        toast.success("User updated successfully");
        navigate(`/profile/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="border border-stone-800 p-4 col-span-3 lg:col-span-2 space-y-6 h-[100vh]">
      <h2 className="text-2xl font-bold">Edit Your Profile</h2>
      <form onSubmit={updateUser} action="" encType="multipart/form-data">
        <div className="flex items-center mb-4">
          <div className="relative">
            <label htmlFor="">Change Your Banner</label>
            <input
              id="bannerInput"
              name="banner"
              type="file"
              onChange={(e) => setBanner(e.target.files[0])}
            />
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="relative">
            <input
              type="file"
              id="avatarInput"
              className="hidden"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
            />
            <label htmlFor="avatarInput" className="cursor-pointer">
              <img
                className="w-16 h-16 rounded-full"
                src={user && `../uploads/${user && user.avatar}`}
                alt=""
              />{" "}
              <div className="absolute inset-0 bg-black opacity-50 hover:opacity-75 flex items-center justify-center rounded-full">
                <span className="text-white text-sm">Change</span>
              </div>
            </label>
          </div>
        </div>

        <div className="my-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={user && user.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="my-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={user && user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="my-6">
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={user && user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Bio
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
            defaultValue={user && user.bio === null ? "" : user && user.bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
        <div className="my-6">
          <button
            type="submit"
            className="focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
          >
            {"Update Profile"}
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditProfile;

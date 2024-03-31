import axios from "axios";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";

import { useLocation, useParams } from "react-router-dom";

function Post({ post, getPost, getAllPostes }) {
  const date = new Date(post && post.updatedAt);
  const id = localStorage.getItem("id");
  const location = useLocation();

  // Function to format the date duration
  const formatDuration = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""}`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""}`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""}`;
    } else {
      return `${seconds} second${seconds !== 1 ? "s" : ""}`;
    }
  };

  const formattedDuration = formatDuration(Date.now() - date.getTime());

  async function handleDelete(e) {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:4500/api/deletepost/${post._id}`);
      getPost();
      getAllPostes();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddSave(e) {
    const obj = {
      id_user: localStorage.getItem("id"),
      id_post: post._id,
    };

    e.preventDefault();
    try {
      await axios.post(`http://localhost:4500/api/createsave`, obj);
    } catch (error) {
      console.log({ message: error.message });
    }
  }

  return (
    <>
      <div className="flex  space-x-6 border border-stone-800 p-4 my-3">
        <img
          className="h-16 w-16 rounded-full object-cover"
          src={`../uploads/${
            location.pathname === "/allsaves"
              ? post && post.id_post.id_user.avatar
              : post && post.id_user.avatar
          }`}
          alt="avatar"
        />
        <div className="">
          <div className="flex items-center space-x-2">
            <h4>{post && post.id_user.name}</h4>
            <span>{formattedDuration}</span>
          </div>
          <h2 className="my-4 font-bold text-xl ">
            {post && post.description === undefined
              ? post.id_post.description
              : post.description}
          </h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FaRegHeart style={{ cursor: "pointer" }} />
              <span>1</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaRegComment style={{ cursor: "pointer" }} />
              <span>1</span>
            </div>
            <form onSubmit={handleAddSave} action="">
              <button className="float-right">
                {}
                <FaBookmark />
              </button>
            </form>
          </div>
        </div>
        {post && id === post.id_user._id ? (
          <form onSubmit={handleDelete} className="">
            <button type="submit">
              <FiTrash cursor={"pointer"} />
            </button>
          </form>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default Post;

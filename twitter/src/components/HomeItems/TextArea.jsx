import axios from "axios";
import { useEffect, useState } from "react";

function TextArea({ getAllPostes }) {
  const id = localStorage.getItem("id");
  const [user, setUser] = useState("");
  const [description, setDescription] = useState("");
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);

  async function getUser() {
    const { data } = await axios.get(`http://localhost:4500/api/user/${id}`);
    if (data) {
      setUser(data);
    }
  }

  async function createPost(e) {
    e.preventDefault();
    const post = await axios.post(`http://localhost:4500/api/createpost`, {
      id,
      description,
      likes,
      comments,
    });
    if (post) {
      console.log("Post Add Successfully");
      setDescription("");
      getAllPostes();
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="border border-stone-800 grid grid-cols-10 p-4 space-x-5">
      <img
        className="h-16 w-16 rounded-full object-cover"
        src={
          user && user.avatar === null
            ? "../uploads/default.jpg"
            : `../uploads/${user && user.avatar}`
        }
        alt="avatar"
      />
      <form onSubmit={createPost} className="col-span-9" action="">
        <textarea
          className="focus:border-none bg-transparent outline-none text-xl pb-8 pt-3 block w-full"
          type="text"
          placeholder="What You Think"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 px-8 py-2 rounded-full float-end "
        >
          Tweet
        </button>
      </form>
    </div>
  );
}

export default TextArea;

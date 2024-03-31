import { useEffect, useState } from "react";
import Post from "../HomeItems/Post";
import TextArea from "../HomeItems/TextArea";
import TitleOfPage from "../HomeItems/TitleOfPage";
import axios from "axios";

function Main() {
  const [AllPosts, setAllPostes] = useState([]);

  async function getAllPostes() {
    try {
      const { data } = await axios.get("http://localhost:4500/api/allpostes");
      if (data) {
        setAllPostes(data.reverse());
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getAllPostes();
  }, []);
  const handleDeletePost = (deletedPostId) => {
    setAllPostes(AllPosts.filter((post) => post._id !== deletedPostId));
  };

  return (
    <div className="border border-stone-800 p-4 col-span-3 lg:col-span-2 space-y-6 ">
      <TitleOfPage />
      <TextArea getAllPostes={getAllPostes} />
      {AllPosts &&
        AllPosts.map((post) => (
          <Post
            key={post._id}
            post={post}
            getPost={getAllPostes} // Corrected prop name to getPost
            getAllPostes={getAllPostes}
            onDeletePost={handleDeletePost}
          />
        ))}
    </div>
  );
}
export default Main;

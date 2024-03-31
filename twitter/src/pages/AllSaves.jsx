import { useEffect, useState } from "react";
import Post from "../components/HomeItems/Post";
import axios from "axios";

function AllSaves() {
  const [saves, setSaves] = useState([]);
  const [test, setTest] = useState([]);
  console.log(localStorage.getItem("id"));
  async function getAllSaves() {
    const { data } = await axios.get("http://localhost:4500/api/allsaves");
    const filter = data.filter(
      (post) => post.id_user._id === localStorage.getItem("id")
    );
    setSaves(filter);
  }

  useEffect(() => {
    getAllSaves();
  }, []);
  console.log(saves);
  return (
    <div className="border border-stone-800 p-4 col-span-3 lg:col-span-2 space-y-6">
      <h2 className="font-bold text-3xl">All My Saves</h2>
      <div>
        {saves && saves.map((post) => <Post key={post._id} post={post} />)}
      </div>
    </div>
  );
}
export default AllSaves;

import Post from "../components/HomeItems/Post";

function AllSaves() {
  return (
    <div className="border border-stone-800 p-4 col-span-3 lg:col-span-2 space-y-6">
      <h2 className="font-bold text-3xl">All My Saves</h2>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
export default AllSaves;

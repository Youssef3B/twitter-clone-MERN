import FollowerCard from "./FollowerCard";

function FollowersCard() {
  return (
    <div className="bg-zinc-800 my-10 mx-6 p-6 rounded">
      <h3 className="text-xl font-bold">Who to Follow</h3>
      <FollowerCard />
      <FollowerCard />
      <FollowerCard />
      <FollowerCard />
    </div>
  );
}
export default FollowersCard;

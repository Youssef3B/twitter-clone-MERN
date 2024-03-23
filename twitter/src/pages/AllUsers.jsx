import UserCard from "../components/UserCard";

function AllUsers() {
  return (
    <div className="border border-stone-800 p-4 col-span-3 lg:col-span-2 space-y-6">
      <h2 className="font-bold text-3xl">All Users</h2>
      <div>
        <input
          className="w-full p-2 bg-slate-900 outline-none"
          type="text"
          placeholder="Search for an User"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}
export default AllUsers;

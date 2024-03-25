function UserCard({ user }) {
  return (
    <div className="bg-zinc-900 p-4 rounded-lg text-center">
      <img
        className="w-20 h-20 rounded-full object-cover object-center mx-auto mb-3"
        src={
          user.avatar === null
            ? "../uploads/default.jpg"
            : `../uploads/${user.avatar}`
        }
        alt=""
      />
      <h3 className="font-bold text-lg mb-1">{user.name}</h3>
      <p className="text-gray-500 mb-3">{user.username}</p>
      <button className="bg-blue-400 px-5 py-1 rounded-full cursor-pointer transition-all hover:bg-blue-600">
        Follow
      </button>
    </div>
  );
}
export default UserCard;

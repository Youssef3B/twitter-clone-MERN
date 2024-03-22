function FollowerCard() {
  return (
    <div className="my-4 flex space-x-3">
      <img
        className="h-16 w-16 rounded-full object-cover object-center"
        src="./avatar.jpeg"
        alt="avatar"
      />
      <div>
        <h4 className="font-bold text-lg">Jane</h4>
        <span className="text-gray-400">@jane</span>
      </div>
    </div>
  );
}
export default FollowerCard;

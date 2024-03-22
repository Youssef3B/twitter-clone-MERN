function TextArea() {
  return (
    <div className="border border-stone-800 grid grid-cols-10 p-4 space-x-5">
      <img
        className="h-16 w-16 rounded-full object-cover"
        src="./avatar.jpeg"
        alt="avatar"
      />
      <form className="col-span-9" action="">
        <textarea
          className="focus:border-none bg-transparent outline-none text-xl pb-8 pt-3 block w-full"
          type="text"
          placeholder="What You Think"
        />
        <button className="bg-blue-500 px-8 py-2 rounded-full float-end ">
          Tweet
        </button>
      </form>
    </div>
  );
}
export default TextArea;

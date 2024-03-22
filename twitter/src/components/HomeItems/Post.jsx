import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

function Post() {
  return (
    <div className="flex  space-x-6 border border-stone-800 p-4 my-3">
      <img
        className="h-16 w-16 rounded-full object-cover"
        src="./avatar.jpeg"
        alt="avatar"
      />
      <div>
        <div className="flex items-center space-x-2">
          <h4>Jane</h4>
          <span>@jane 2 hours</span>
        </div>
        <h2 className="my-4 font-bold text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          ipsum tenetur deserunt. Ea reiciendis tenetur, asperiores odio
          quibusdam nam suscipit iusto alias nobis, recusandae quaerat ipsum
          dolore, ullam eaque tempore impedit laboriosam voluptates officia
          saepe odit repellat! Officia, reiciendis dolor?
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
          <div className="float-right">
            <FaBookmark />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;

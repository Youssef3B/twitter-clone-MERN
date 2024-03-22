import Post from "../HomeItems/Post";
import TextArea from "../HomeItems/TextArea";
import TitleOfPage from "../HomeItems/TitleOfPage";

function Main() {
  return (
    <div className="border border-stone-800 p-4 col-span-3 lg:col-span-2 space-y-6 ">
      <TitleOfPage />
      <TextArea />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
export default Main;

import FollowersSlide from "../components/FollowersSlide/FollowersSlide";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import NavbarPhone from "../components/NavbarPhone/NavbarPhone";

function Home() {
  return (
    <section className="lg:px-56 text-white bg-zinc-950 ">
      <Navbar />
      <div className="lg:ml-[239px] grid grid-cols-3">
        <Main />
        <FollowersSlide />
      </div>

      <NavbarPhone />
    </section>
  );
}
export default Home;

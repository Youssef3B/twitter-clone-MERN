import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import NavbarPhone from "./NavbarPhone/NavbarPhone";
import FollowersSlide from "./FollowersSlide/FollowersSlide";

function AppLayout() {
  return (
    <section className="lg:px-56 text-white bg-zinc-950 ">
      <Navbar />
      <div className="lg:ml-[239px] grid grid-cols-3">
        <Outlet />
        <FollowersSlide />
      </div>

      <NavbarPhone />
    </section>
  );
}
export default AppLayout;

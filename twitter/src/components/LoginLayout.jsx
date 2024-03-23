import { Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <section className="grid md:grid-cols-2 relative bg-zinc-950 items-center">
      <img
        className="h-[100vh] w-[100%] object-cover hidden md:block"
        src="./login.jpeg"
        alt=""
      />
      <Outlet />
    </section>
  );
}
export default LoginLayout;

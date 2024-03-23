import { NavLink } from "react-router-dom";

function Register() {
  return (
    <div>
      <div className="text-white flex flex-col items-center justify-center mt-36 md:mt-0">
        <img className="mb-10 w-20" src="./twitter.png" alt="Logo" />
        <h2 className="mb-4 text-3xl font-bold">Create A New Account</h2>
        <p className="mb-4 font-semibold text-blue-400">
          To Use Twitter Please Enter Your Details
        </p>
        <form className="flex flex-col mb-3 mt-3 w-96">
          <label className="my-2" htmlFor="name">
            Name
          </label>
          <input
            className="my-2 bg-slate-900 text-white py-2 px-3 outline-none"
            type="text"
          />
          <label className="my-2" htmlFor="name">
            Username
          </label>
          <input
            className="my-2 bg-slate-900 text-white py-2 px-3 outline-none"
            type="text"
          />
          <label className="my-2" htmlFor="email">
            Email
          </label>
          <input
            className="my-2 bg-slate-900 text-white py-2 px-3 outline-none"
            type="email"
          />
          <label className="my-2" htmlFor="password">
            Password
          </label>
          <input
            className="my-2 mb-7 bg-slate-900 text-white py-2 px-3 outline-none"
            type="password"
          />
          <button
            type="submit"
            className="focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
          >
            Create an account
          </button>
        </form>
        <h4 className="mt-3">
          Already have an account?{" "}
          <NavLink to="/login">
            <span className="text-blue-400">Login</span>
          </NavLink>
        </h4>
      </div>{" "}
    </div>
  );
}
export default Register;

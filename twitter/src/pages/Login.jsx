import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4500/api/login", {
        email,
        password,
      });
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        localStorage.setItem("id", data._id);
        console.log("Successfully logged in");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="text-white flex flex-col items-center justify-center mt-52 md:mt-0">
      <img className="mb-10 w-20" src="./twitter.png" alt="Logo" />
      <h2 className="mb-4 text-3xl font-bold">Login To Your Account</h2>
      <p className="mb-4 font-semibold text-blue-400">
        Welcome back. Please Enter Your Details!
      </p>
      <form onSubmit={handleLogin} className="flex flex-col mb-3 mt-3 w-96">
        <label className="my-2" htmlFor="email">
          Email
        </label>
        <input
          className="my-2 bg-slate-900 text-white py-2 px-3 outline-none"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="my-2" htmlFor="password">
          Password
        </label>
        <input
          className="my-2 mb-7 bg-slate-900 text-white py-2 px-3 outline-none"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
        >
          Login
        </button>
      </form>
      <h4 className="mt-3">
        Dont have an account ?{" "}
        <NavLink to="/register">
          <span className="text-blue-500">Sign up</span>
        </NavLink>
      </h4>
    </div>
  );
}
export default Login;

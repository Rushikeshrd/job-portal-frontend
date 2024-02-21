import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [errorMessage, seterrorMessage] = useState("");
  const { signUpWithGmail, login } = useContext(AuthContext);

  // console.log(signUpWithGmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password)
    login(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        // console.log(user);
        alert("Login successful!");
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorMessage = "Please provide valid emailId & password!";
        alert(errorMessage);
      });
  };

  // login with google
  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        alert("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleReset = () => {
    navigate("/reset");
  };

  return (
    <div className="h-screen mx-auto container flex items-center justify-center">
      <div className="w-full max-w-xs mx-auto">
        <div className="flex justify-end">
          <Link to={"/"} className="text-xs font-semibold hover:text-blue">
            &larr; Back to Home
          </Link>
        </div>
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4"
        >
          <h3 className="text-xl font-semibold mb-4">Please Login!</h3>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="name@email.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />

            {/* show errors */}
            {errorMessage ? (
              <p className="text-red-500 text-xs italic">Invalid password.</p>
            ) : (
              ""
            )}
          </div>
          <div className="flex items-center justify-between">
            <input
              className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 cursor-pointer rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Sign in"
            />

            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue"
              href="#"
              onClick={handleReset}
            >
              Forgot Password?
            </a>
          </div>

          {/* social login */}
          <hr className="h-1 bg-blue-100 dark:bg-blue-400 mt-5" />

          <div className="mt-8 text-center w-full mx-auto">
            {/* <p className="mb-4">Sign up with Social</p> */}

            <div className="flex flex-col items-center justify-center gap-1 w-full mx-auto">
              <button
                onClick={handleRegister}
                type="button"
                className="text-white bg-blue hover:bg-blue/80 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                    clipRule="evenodd"
                  />
                </svg>
                Sign in with Google
              </button>
              <button
                type="button"
                className="text-white bg-blue hover:bg-blue/80 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link to={"/sign-up"}>Sign Up with Email</Link>
              </button>
            </div>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2024 OpportunityNest. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;

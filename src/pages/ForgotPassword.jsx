import React from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useLocation, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emalVal = event.target.email.value;
    sendPasswordResetEmail(auth, emalVal)
      .then((data) => {
        alert("Check your gmail");
        navigate("/login");
      })
      .catch((err) => {
        alert("Your mail is not valid");
      });
  };

  return (
    <div className="h-screen mx-auto container flex items-center justify-center">
      <div className="w-full max-w-xs mx-auto">
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4"
        >
          <h3 className="text-xl font-semibold mb-4 justify-center">
            Forgot Password
          </h3>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="name@email.com"
              required
            />
          </div>

          <div className="flex items-center justify-center">
            <input
              className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
              type="submit"
              value="Reset Password"
              //   onClick={(event) => handleSubmit(event)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;

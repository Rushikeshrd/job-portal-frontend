/* eslint-disable react/no-unknown-property */
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // menu toggle btn
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary estimate" },
    { path: "/post-job", title: "Post A Job" },
  ];
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <path
              fill="#65471B"
              d="M20.409 24.866L20 22l7.548-16.983a2.84 2.84 0 0 1 1.476-1.456l5.517-2.364A.759.759 0 0 0 35 .5a.373.373 0 0 0-.479-.356l-8.296 2.489a2.842 2.842 0 0 0-1.762 1.529L19 16L0 36h9l1.859-1.859a8.688 8.688 0 0 1 2.616-1.797L21 29c2.463-1.642 10.996-2.61 13.969-2.904A1.144 1.144 0 0 0 36 24.958a.905.905 0 0 0-.956-.904z"
            />
            <path
              fill="#BD9366"
              d="M33.485 14.893c-.061-.147-.1-.604-.31-1.04c-.049-.076-.382-.523-.329-.491c-.532-.572-.838-.829-1.454-1.274c-.265-.008-.437-.029-.808-.525c-2.567-1.545-5.955-3.929-10.796-3.958c-4.472-.027-10.333 2.143-14.46 4.496c-3.746 2.136-3.565 2.492-3.531 5.144l3.061 3.893c1.07 1.36 2.073 2.97 3.414 4.081c.826.684 2.663 2.118 10.134 2.661c.91.066 1.728.08 2.255-.006c2.763-.451 5.445-2.886 6.183-3.243c3.455-1.671 6.286-2.989 6.659-8.219a8.202 8.202 0 0 0-.018-1.519"
            />
            <path
              fill="#77B255"
              d="M35.889 30.561c-1.763-2.455-5.232-6.206-8.654-3.772a.553.553 0 0 0-.179.236a.757.757 0 0 0-.536.061c-1.764.919-4.409 1.574-3.225 8.428c.031.182.158.339.341.423s.4.085.584.002c3.122-1.414 3.831-4.042 3.772-6.076c.358.524.785.973 1.309 1.309c1.737 1.111 3.945.879 5.248.591a8.793 8.793 0 0 0 1.1-.31a.548.548 0 0 0 .329-.377a.615.615 0 0 0-.089-.515"
            />
            <path
              fill="#5C913B"
              d="M24.5 34a.501.501 0 0 1-.5-.495c-.023-2.39.562-3.425 1.306-4.736c.242-.428.505-.891.772-1.455c.194-.41.634-.647 1.079-.598c2.452.284 5.13 2.016 6.678 3.413a.499.499 0 1 1-.67.742c-1.158-1.045-3.751-2.887-6.123-3.162c-.34.623-.613 1.106-.866 1.553c-.695 1.226-1.197 2.112-1.176 4.233a.5.5 0 0 1-.495.505z"
            />
            <path
              fill="#A57F5A"
              d="M33.182 14.629c-.362-.516-.971-2.118-1.403-1.877a1.01 1.01 0 0 0-.482-.144c-.069 0-.143.027-.216.044c-.688-1.375-1.999-2.436-3.602-3.009c-.265-.095-.493-.075-.679.015a55.723 55.723 0 0 1-.603-.451c-.512-.39-1.01.478-.505.863c1.13.862 1.668.95 1.722 2.407c.224 6.007-.481 10.022-9.002 9.794c-2.399-.064-5.718-1.876-8.156-3.884a7.352 7.352 0 0 1-.706-1.262c-.215-.508-.956-.61-1.387-.364c-.054.031-.083.076-.127.112a9.476 9.476 0 0 0-1.866-1.036c-.506-.211-1.115.228-1.247.708c-.161.584.201 1.036.708 1.247c3.812 1.589 1.494 3.724 8.324 5.482c1.264.325.725 2.279-.539 1.954c-3.22-.829-10.199-5.75-10.199-5.75c.086.096.847 10.93 14.543 11.461c.372.014 12.158.67 15.078-10.759c.443-1.737 1.813-3.455.344-5.551"
            />
            <path
              fill="#BD9366"
              d="M19.759 24.881c-.025-.554.483-1.003 1.013-1.013c.238-.004.473-.023.711-.044l.04-.003l.037-.007c.114-.02.228-.038.342-.06c.394-.077.783-.181 1.167-.299c.795-.245 1.569-.553 2.354-.83c.535-.189 1.087.215 1.246.707c.177.546-.209 1.07-.707 1.246c-1.699.6-3.358 1.281-5.189 1.315c-.569.011-.99-.472-1.014-1.012"
            />
            <path
              fill="#936D46"
              d="M18.242 9.687c-3.366-.51-6.829-.297-9.155 1.931c-.386.369-.566.895-.57 1.441c-.463.533-.712 1.175-.508 2.015c.258 1.062.364 1.804 1.388 2.269c6.479 2.941 17.775 3.036 18.668-4.408c.425-3.538-6.808-2.791-9.823-3.248"
            />
            <path
              fill="#BD9366"
              d="M18.826 28.109c.024.537-.477 1.005-1 1a19.065 19.065 0 0 1-6.425-1.17c-.526-.195-.827-.664-.698-1.23c.113-.495.739-.88 1.23-.698c1.964.727 3.854 1.079 5.893 1.098c.561.005.976.454 1 1m14.147-13.543c-.184-.507-.682-.848-1.231-.696c-.49.136-.881.721-.696 1.231c.526 1.451 1.138 3.071.791 4.635c-.15.675-.441 1.255-.957 1.722c-.624.566-1.359 1.03-2.037 1.529c-.434.32-.65.869-.356 1.369c.252.429.931.678 1.369.356c.833-.613 1.741-1.187 2.497-1.895c.686-.642 1.154-1.511 1.381-2.417c.497-1.984-.085-3.969-.761-5.834"
            />
            <path
              fill="#77B255"
              d="M24.986 3.599a.485.485 0 0 0-.002-.221c-.001-.002-.003-.004-.003-.007c-.004-.015-.014-.027-.02-.041a.508.508 0 0 0-.093-.159c-.007-.007-.008-.018-.015-.025C20.95-.757 18.173.329 16.84.85c-.182.071-.335.133-.462.165a.5.5 0 0 0-.326.709c.016.031 1.155 2.214 4.08 2.724c-.343.578-.639 1.28-.883 2.116a.502.502 0 0 0 .277.597c.305.135.621.202.946.202c1.412 0 2.985-1.256 4.45-3.597c.021-.034.029-.073.041-.11c.005-.015.018-.025.021-.041c.004-.006.001-.011.002-.016"
            />
            <path
              fill="#5C913B"
              d="M20.722 3.03c-.598-.322-1.275-.688-2.38-1.056a.5.5 0 1 1 .317-.948c1.187.396 1.937.799 2.538 1.124c.374.202.7.375 1.06.513c-.108.029-.22.043-.325.086a3.071 3.071 0 0 0-.811.493a22.623 22.623 0 0 1-.399-.212m1.253 2.628C22.347 4.542 23.173 4 24.5 4a.5.5 0 0 0 0-1c-1.763 0-2.964.81-3.475 2.342a.5.5 0 0 0 .95.316"
            />
            <g fill="#DEAD74">
              <path d="M21.272 10.135C9.833 9.704 7.708 14.489 9.381 16.409c.519.595 1.148.951 1.852 1.297c1.173.576.227 2.37-.945 1.795c-4.128-2.026-4.263-5.481-1.868-7.823c-1.461.576-1.931-1.41-.768-1.88c1.62-.654 3.298-1.073 5.004-1.339c-.515-.093-1.426-.053-1.514-1.032c-.166-1.857 2.62-.745 4.557-.272c1.363-.834 2.896-1.02 4.496-.893c1.153.091 1.358 1.26.647 1.838c1.89.064 1.627 2.081.43 2.035" />
              <path d="M8.764 23.59c-1.97-3.539-4.057-3.525-5.385-5.45c-2.436-3.533 2.76-4.666 1.844-7.751c-.372-1.249-2.33-.717-1.957.539c.284.957-1.482 1.487-2.295 3.977a4.908 4.908 0 0 0 .134 3.408c-1.169.207-1.011 1.771-.097 1.953c.735.146 1.158.293 1.759.524c.266.175 2.663.983 4.245 3.824c.625 1.121 2.428.19 1.752-1.024m25.914-9.412c-.411-.843-1.103-1.522-1.865-2.1a18.34 18.34 0 0 0-.311-1.108c.815-.233 1.052-1.608.025-1.947c-.97-.32-2.074.404-2.122 1.651a26.297 26.297 0 0 0-4.936-2.326c-1.219-.426-1.896 1.485-.589 1.941c3.732 1.304 1.823 4.862-1.373 6.759c-2.489 1.074-5.175 1.31-7.567.49c-1.086-.372-1.905 1.477-.432 1.982c3.262 1.118 7.204.335 10.223-1.365c1.709-.963 3.306-3.694 2.988-5.638c-.051-.309.293-.519.548-.349c.873.581 1.684 1.398 1.644 1.761c-.21 1.925-.414 2.872-2.426 4.353c-.413.304-.677.887-.511 1.421c.15.482.716.8 1.174.554c.925-.497 1.815-1.149 2.524-2.177c.735-1.039.82-2.079 1.102-3.154c.439.752.569 1.72.185 2.798c-.19.533.185 1.154.674 1.231c1.752.341 1.89-3.044 1.045-4.777m-12.126 7.521c-.392-2.012-4.323.709-7.849-1.502c-1.196-.75-2.219 1.001-1.154 1.669c2.487 1.56 5.411 1.335 8.202 1.024c.545-.062.9-.685.801-1.191" />
            </g>
            <path
              fill="#5DADEC"
              d="M22.445 9.049c-2.104-.534-4.604 2.159-5.291 4.864c-.471 1.856.046 3.222 1.088 4.078c1.742.128 3.549-.203 5.265-.943a9.703 9.703 0 0 0 1.129-.795c.045-.136.101-.257.139-.404c.686-2.706-.225-6.266-2.33-6.8"
            />
            <path
              fill="#3B94D9"
              d="M23.862 10.161a.083.083 0 0 0-.048.095c.253 1.157.252 2.454-.039 3.6c-.687 2.706-2.713 3.533-4.817 2.998c-.718-.182-1.348-.504-1.844-.95a.044.044 0 0 0-.05-.006a.044.044 0 0 0-.022.045a3.346 3.346 0 0 0 1.19 2.047c1.745.13 3.556-.201 5.275-.943a9.703 9.703 0 0 0 1.129-.795c.045-.136.101-.257.139-.405c.488-1.92.168-4.265-.81-5.659a.087.087 0 0 0-.103-.027"
            />
            <path
              fill="#A8E0F9"
              d="M21.33 10.255c-.574-.146-1.464.454-1.987 1.339c-.523.886-.483 1.722.091 1.867s1.464-.454 1.987-1.339c.524-.885.483-1.721-.091-1.867"
            />
            <path
              fill="#5DADEC"
              d="M18.823 14.933c-.685-2.706-3.178-5.399-5.276-4.864c-2.098.534-3.007 4.094-2.322 6.8c.134.53.333.968.56 1.358c.969.293 1.987.531 3.028.697a.922.922 0 0 1-.081-.61c.107-.491.689-.953 1.207-.775c.846.29 1.729.441 2.626.477c.435-.806.575-1.831.258-3.083"
            />
            <path
              fill="#3B94D9"
              d="M14.813 18.923a.922.922 0 0 1-.081-.61a1.02 1.02 0 0 1 .218-.421c-1.292.314-2.542.098-3.472-.744a.093.093 0 0 0-.151.098c.119.369.274.685.444.977a23.2 23.2 0 0 0 3.042.7m4.01-3.99a7.864 7.864 0 0 0-1.026-2.303a.044.044 0 0 0-.055-.016a.043.043 0 0 0-.023.052c.03.097.057.193.082.29c.578 2.277-.323 3.826-1.876 4.579c.005.002.01.001.014.003c.845.29 1.727.441 2.623.477c.438-.804.579-1.829.261-3.082"
            />
            <ellipse
              cx="13.501"
              cy="12.022"
              fill="#A8E0F9"
              rx="1.274"
              ry=".784"
              transform="rotate(-38.409 13.502 12.022)"
            />
          </svg>
          <div className="font-semibold">
            <span>Opportunity</span>
            <span className="text-blue">Nest</span>
          </div>
        </a>

        {/* nav items */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* sign up signout btn */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          {user ? (
            <>
              <div className="flex gap-4 items-center">
                <div class="flex -space-x-2 overflow-hidden">
                  {user?.photoURL ? (
                    <>
                      {" "}
                      <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src={user?.photoURL}
                        alt=""
                      />
                    </>
                  ) : (
                    <>
                      {" "}
                      <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </>
                  )}
                </div>
                <button
                  onClick={handleLogout}
                  className="py-2 px-5 border rounded hover:bg-blue hover:text-white"
                >
                  Log out
                </button>
              </div>
            </>
          ) : (
            <>
              {" "}
              <Link to="/login" className="py-2 px-5 border rounded">
                Log in
              </Link>
              <Link
                to="/sign-up"
                className="bg-blue py-2 px-5 text-white rounded"
              >
                Sign up
              </Link>
            </>
          )}
        </div>

        {/* mobile menu */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <>
                <FaXmark className="w-5 h-5 text-primary/75" />
              </>
            ) : (
              <>
                <FaBarsStaggered className="w-5 h-5 text-primary/75" />
              </>
            )}
          </button>
        </div>
      </nav>

      {/* mobile menu items */}
      <div
        className={`px-4 bg-black py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        {user ? (
          <>
            <div className="flex gap-4 items-center">
              <div className="flex -space-x-2 overflow-hidden">
                {user?.photoURL ? (
                  <>
                    {" "}
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-4 items-center justify-center">
                        <img
                          className="inline-block h-5 w-5 rounded-full ring-1 ring-white"
                          src={user?.photoURL}
                          alt="user-profile"
                        />
                        <p className="text-white py-1 text-sm">{user.email}</p>
                      </div>
                      <div className="w-auto flex ml-8 justify-end">
                        <button
                          onClick={handleLogout}
                          type="button"
                          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 "
                        >
                          Log out
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-4 items-center justify-center">
                        <img
                          className="inline-block h-5 w-5 rounded-full ring-1 ring-white"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <p className="text-white py-1 text-sm">{user.email}</p>
                      </div>
                      <button
                        onClick={handleLogout}
                        type="button"
                        className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 "
                      >
                        Log out
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* <button onClick={handleLogout} className=" text-white py-1">
                    Log out
                  </button> */}
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-3 justify-center">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <Link to="/login">Log in</Link>
                </span>
              </button>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <Link to="/sign-up">Sign up</Link>
                </span>
              </button>
              {/* <Link
                to="/login"
                className="text-base text-white first:text-white py-1"
              >
                Log in
              </Link>
              <br />
              <Link
                to="/sign-up"
                className="text-base text-white first:text-white py-1"
              >
                Sign up
              </Link> */}
            </div>
          </>
        )}

        <ul>
          <hr />
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              <NavLink
                onClick={handleMenuToggler}
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}

          {/* 
          <li className="text-white py-1">
            <Link to="login">Log in</Link>
          </li>
          <li className="text-white py-1">
            <Link to="sign-up">Sign up</Link>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

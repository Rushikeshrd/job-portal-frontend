import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow bg-gray-50 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://opportunitynestportal.netlify.app/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse pl-4"
          >
            <img
              src="../public/nest.svg"
              className="h-8"
              alt="OpportunityNest Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              <div className="font-semibold">
                <span>Opportunity</span>
                <span className="text-blue">Nest</span>
              </div>
            </span>
          </a>
          <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to={"/about"} className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to={"/privacy"} className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="hover:underline me-4 md:me-6">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Copyright © 2024{" "}
          <a
            href="https://opportunitynestportal.netlify.app/"
            className="hover:underline"
          >
            OpportunityNest{" "}
          </a>
          by
          <a
            href="https://rushikeshrd.netlify.app/"
            className="hover:underline"
          >
            {" "}
            Rushikesh Dasarwad
          </a>
          . Made with ❤️!!
        </span>
      </div>
    </footer>
  );
};

export default Footer;

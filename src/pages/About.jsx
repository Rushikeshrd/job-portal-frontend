import React from "react";

const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">About us</h1>
        <div className="text-center">
          <p className="text-gray-700">
            Welcome to <b>OpportunityNest!</b> We're dedicated to connecting job
            seekers with employers effortlessly. Our platform simplifies the
            hiring process, offering innovative tools for both candidates and
            recruiters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

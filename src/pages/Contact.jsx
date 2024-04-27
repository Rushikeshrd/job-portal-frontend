import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <div className="text-center">
          <p className="text-gray-700">
            Have a question or need assistance? Feel free to reach out to us
            using the contact information below:
          </p>
          <ul className="mt-4 text-center">
            <li>
              <strong>Email:</strong> rushidasarwad@gmail.com
            </li>
            {/* <li>
              <strong>Phone:</strong> [Your Contact Phone Number]
            </li>
            <li>
              <strong>Address:</strong> [Your Company Address]
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;

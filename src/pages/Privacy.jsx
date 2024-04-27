import React from "react";

const Privacy = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
        <div className="text-center">
          <p className="text-gray-700">
            At <b>OpportunityNest</b>, we prioritize your privacy. We collect
            and use personal information solely for job matching purposes and
            ensure its security. We don't share your data without consent. Our
            cookie policy enhances user experience, and we're not responsible
            for third-party website privacy practices.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            By using OpportunityNest, you agree to the terms outlined in this
            Privacy Policy. We reserve the right to update or modify this policy
            at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

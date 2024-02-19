import React from "react";
import InputField from "../components/InputField";

const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work experience</h4>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Any experience
        </label>
        <InputField
          handleChange={handleChange}
          value="0-1 Experience"
          title="0-1 Year"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="<= 2 Years"
          title="<= 2 Years"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="<= 3 Years"
          title="<= 3 Years"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="<= 4 Years"
          title="<= 4 Years"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="<= 5 Years"
          title="<= 5 Years"
          name="test"
        />
      </div>
    </div>
  );
};

export default WorkExperience;

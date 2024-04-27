import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import PageHeader from "../components/PageHeader";

const UpdateJob = () => {
  const { id } = useParams();
  const {
    companyName,
    jobTitle,
    companyLogo,
    maxSalary,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    employmentType,
    description,
    postedBy,
    skills,
    qualificationReq,
    applyLink,
    companySite,
  } = useLoaderData();

  const [selectedOption, setSelectedOption] = useState(null);

  // const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;

    fetch(`https://job-portal-backend-q154.onrender.com/update-job/${id}`, {
      method: "PATCH",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          alert("Job Updated Successfully!!");
        }
        navigate("/my-job");
      });
  };

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
  ];

  // console.log(watch("example"));

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* <PageHeader title={"Post A Job"} path={"Create Job"} /> */}

      {/* form */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 1st row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                required
                defaultValue={jobTitle}
                {...register("jobTitle")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                required
                defaultValue={companyName}
                placeholder="Ex: Microsoft"
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 2nd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary</label>
              <input
                required
                defaultValue={maxSalary}
                placeholder="$20k"
                {...register("maxSalary")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">
                Qualification Required
              </label>
              <select
                {...register("qualificationReq")}
                className="create-job-input"
                required
                defaultValue={qualificationReq}
              >
                <option value="">Choose qualification</option>
                <option value="Graduate">Graduate</option>
                <option value="Bsc">Bsc</option>
                <option value="Msc">Msc</option>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="MBA">MBA</option>
                <option value="BA">BA</option>
                <option value="LLB">LLB</option>
                <option value="PhD">PhD</option>
              </select>
            </div>
          </div>

          {/* 3rd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select
                {...register("salaryType")}
                className="create-job-input"
                required
                defaultValue={salaryType}
              >
                <option value="">Choose your salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                defaultValue={jobLocation}
                required
                placeholder="Ex: New York"
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                required
                defaultValue={postingDate}
                className="create-job-input"
                {...register("postingDate")}
                placeholder="Ex: 2023-11-03"
                type="date"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                {...register("experienceLevel")}
                className="create-job-input"
                required
                defaultValue={experienceLevel}
              >
                <option value="">Select Your Experience Level</option>
                <option value="0-1 Experience">0-1 Year</option>
                <option value="<= 2 Years">&#60;= 2 Years</option>
                <option value="<= 3 Years">&#60;= 3 Years</option>
                <option value="<= 4 Years">&#60;= 4 Years</option>
                <option value="<= 5 Years">&#60;= 5 Years</option>
              </select>
            </div>
          </div>

          {/* 5th row */}
          <div className="">
            <label className="block mb-2 text-lg">Required Skill Sets:</label>
            <CreatableSelect
              className="create-job-input py-4"
              defaultValue={skills}
              onChange={setSelectedOption}
              options={options}
              isMulti
              required
            />
          </div>

          {/* 6th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                required
                type="url"
                placeholder="Paste your image url: https://weshare.com/img1.jpg"
                defaultValue={companyLogo}
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                defaultValue={employmentType}
                {...register("employmentType")}
                className="create-job-input"
                required
              >
                <option value="">Select your job type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>

          {/* 7th row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              required
              className="w-full pl-3 py-1.5 focus:outline-none"
              rows={6}
              {...register("description")}
              placeholder="job description"
              defaultValue={description}
            />
          </div>

          {/* last row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Posted by</label>
            <input
              required
              type="email"
              // value={user?.email}
              className="w-full pl-3 py-1.5 focus:outline-none"
              {...register("postedBy")}
              placeholder="your email"
              defaultValue={postedBy}
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Apply Link</label>
              <input
                required
                {...register("applyLink")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                placeholder="apply link"
                defaultValue={applyLink}
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Site</label>
              <input
                required
                placeholder="https://weshare.com/"
                {...register("companySite")}
                className="create-job-input"
                defaultValue={companySite}
              />
            </div>
          </div>

          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;

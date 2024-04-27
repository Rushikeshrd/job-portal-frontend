import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link, useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch(`https://job-portal-backend-q154.onrender.com/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);


  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"Job Details Page"} path={"Single Job"} />

      <div className="mt-10">
        <div className="md:flex justify-between items-center">
          <div>
            <div className="my-4">
              <h3 className="font-semibold mb-2">Job ID: {id}</h3>
              <h2 className="text-2xl font-medium text-blue">Job details</h2>
            </div>

            <div className="my-4 space-y-2">
              <div className="flex-row gap-2">
                {/* <FaBriefcase /> */}
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold mb-2">Job type :</p>
                  <p className="text-xl font mb-2">{job.employmentType}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold mb-2">Company Website :</p>
                  <p className="text-xl font mb-2">
                    <a
                      className="text-xl font mb-2 text-sky-500 sm:text-wrap"
                      href={job.companySite}
                    >
                      {job.companySite}
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold mb-2">
                    Qualification Required :
                  </p>
                  <p className="text-xl font mb-2">
                    {job.qualificationReq} or Equivalent Degree
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold mb-2">Experience :</p>
                  <p className="text-xl font mb-2">{job.experienceLevel}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold mb-2">Salary :</p>
                  <p className="text-xl font mb-2">
                    &#x20b9; {job.maxSalary} LPA {job.salaryType} (Expected)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold mb-2">Job Location :</p>
                  <p className="text-xl font mb-2">{job.jobLocation}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="bg-indigo-700 px-6 py-1 text-white rounded-sm ms-2">
                  <Link to={job.applyLink}>Apply Now</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Company Logo */}
          <div className="w-40 h-auto">
            <img src={job.companyLogo} alt="" />
          </div>
        </div>
        {/* job details */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mt-12">
          <div className="md:w">
            <h4 className="text-lg font-medium mb-3">Description</h4>
            <p className="text-primary/90 text-justify">{job.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

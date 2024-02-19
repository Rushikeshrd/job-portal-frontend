import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { useParams } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch(`https://job-portal-backend-q154.onrender.com/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  // const handleJobApply = async () => {
  //   // console.log("btn clicked")
  //   const { value: url } = await Swal.fire({
  //     input: "url",
  //     inputLabel: "CV or Resume URL address",
  //     inputPlaceholder: "Enter the URL",
  //   });
  //   if (url) {
  //     Swal.fire(`Entered URL: ${url}`).then((result) => {
  //       /* Read more about isConfirmed, isDenied below */
  //       if (result.isConfirmed) {
  //         Swal.fire("Appliction Submited Successfully!", "", "success");
  //       } else if (result.isDenied) {
  //         Swal.fire("Changes are not saved", "", "info");
  //       }
  //     });
  //   }
  // };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"Job Details Page"} path={"Single Job"} />

      <div className="mt-10">
        <h3 className="font-semibold mb-2">Job ID: {id}</h3>

        <div className="my-4">
          <h2 className="text-2xl font-medium text-blue">Job details</h2>
          {/* <p className="text-primary/75 md:w-1/3 text-sm italic my-1">
            Here<span>&apos;</span>s how the job details align with your job
            preferences. Manage job preferences anytime in your profile.
          </p> */}
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
                <a className="text-blue" href={job.companySite}>
                  {job.companySite}
                </a>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold mb-2">Qualification Required :</p>
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

        {/* job details */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mt-12">
          <div className="md:w">
            <h4 className="text-lg font-medium mb-3">Description</h4>
            <p className="text-primary/90 text-justify">{job.description}</p>
          </div>
          <div className="md:w-1/3">
            <h4 className="text-lg font-medium mb-3">Benefits</h4>
            {/* <p className="text-sm text-primary/70 mb-2">
              Pulled from the full job description
            </p> */}
            <p className="text-justify text-primary/90 space-y-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              maxime expedita dolore facilis veniam dicta quos mollitia, eaque
              quas rem modi blanditiis illum. Non officia obcaecati accusamus,
              earum harum repellendus!
            </p>
          </div>

          {/* <div className="md:w-1/3">
            <h4 className="text-lg font-medium mb-3">Future Growth</h4>
            <p className="text-primary/90 text-justify">
              An industry leader in providing educational, operational and
              technological support services to the post-secondary education
              sector. We put people first, drive innovation, and do good in the
              community that we live and work in.
              <br />
              <br />
              We’re passionate about web design and development and are focused
              on delivering quality products to our customers in a team setting
              driven by strong culture and a good working atmosphere. We are
              hiring web developers at all levels of experience. Requirements
              below reflect the minimum experience level.
            </p>
          </div> */}
        </div>

        {/* <div className="text-primary/75 my-5 space-y-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            tempore alias dolores. Maxime id quas, asperiores dolor illo
            veritatis quibusdam sint possimus quod hic nulla officiis
            necessitatibus laudantium expedita commodi?Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Nulla, cum nostrum.
            Exercitationem, dolores, tenetur culpa quas perspiciatis, libero
            iste voluptate totam mollitia facere fugiat fugit veritatis
            accusantium quae aliquam. Labore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            tempore alias dolores. Maxime id quas, asperiores dolor illo
            veritatis quibusdam sint possimus quod hic nulla officiis
            necessitatibus laudantium expedita commodi?Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Nulla, cum nostrum.
            Exercitationem, dolores, tenetur culpa quas perspiciatis, libero
            iste voluptate totam mollitia facere fugiat fugit veritatis
            accusantium quae aliquam. Labore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            tempore alias dolores. Maxime id quas, asperiores dolor illo
            veritatis quibusdam sint possimus quod hic nulla officiis
            necessitatibus laudantium expedita commodi?Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Nulla, cum nostrum.
            Exercitationem, dolores, tenetur culpa quas perspiciatis, libero
            iste voluptate totam mollitia facere fugiat fugit veritatis
            accusantium quae aliquam. Labore?
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default JobDetails;

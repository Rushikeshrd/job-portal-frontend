import {
  FiCalendar,
  FiClock,
  FiDollarSign,
  FiMapPin,
  FiSearch,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  // console.log(data);
  const {
    _id,
    companyLogo,
    jobTitle,
    companyName,
    jobLocation,
    employmentType,
    maxSalary,
    postingDate,
    description,
  } = data;
  return (
    <div>
      <section className="card">
        <Link
          to={`/jobs/${_id}`}
          className="flex gap-4 flex-col sm:flex-row items-start"
        >
          <img src={companyLogo} alt={jobTitle} className="w-16 h-16 mb-4" />
          <div className="card-details">
            <div className="flex justify-between">
              <h4 className="text-primary mb-1">{companyName}</h4>
              <h4 className="text-primary hover:text-blue mb-1 text-right">
                Click to Apply
              </h4>
            </div>
            <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>

            <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
              <span className="flex items-center gap-2">
                <FiMapPin /> {jobLocation}
              </span>
              <span className="flex items-center gap-2">
                <FiClock /> {employmentType}
              </span>
              <span className="flex items-center gap-2">
                &#x20b9; {maxSalary} LPA
              </span>
              <span className="flex items-center gap-2">
                <FiCalendar /> {postingDate}
              </span>
            </div>

            <p className="text-base text-primary/70 text-justify ">
              {description}
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Card;

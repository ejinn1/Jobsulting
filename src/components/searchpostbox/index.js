import { useState } from "react";
import "./searchpostbox.css";
import SearchPost from "components/searchpost";

function SearchPostBox({ company, index }) {
  //   누르면 펴지고 접힘
  const [isOpen, setIsOpen] = useState(false);

  const handleCompanyClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="search-company-info">
      <h1
        style={{ backgroundColor: isOpen ? "#94a8fa" : "" }}
        onClick={handleCompanyClick}
        className="company-name"
      >
        {company.name}
      </h1>
      {isOpen ? (
        <ul className="search-info-box">
          {company.jobs.map((job, subIndex) => (
            <SearchPost
              key={`${index}_${subIndex}`}
              id={job.id}
              title={job.title}
              skills={job.Skills}
              location={job.location_name[0]}
              career_min={job.experiencelevel_min}
              career_max={job.experiencelevel_max}
              date={job.expiration_timestamp}
              jobtype={job.type[0]}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
}
export default SearchPostBox;

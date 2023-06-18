import { useNavigate } from "react-router-dom";
import "./searchpost.css";

function SearchPost({
  id,
  title,
  skills,
  location,
  career_min,
  career_max,
  date,
  jobtype,
}) {
  const dateString = date.slice(0, date.indexOf("T"));
  const career = career_max >= career_min ? career_max : career_min;

  const navigate = useNavigate();

  const goMiniConsulting = (
    id,
    title,
    skills,
    location,
    career,
    date,
    jobtype
  ) => {
    navigate("/miniconsulting", {
      state: {
        company_id: id,
        title: title,
        skills: skills,
        location: location,
        career: career,
        date: date,
        jobtype: jobtype,
      },
    });
  };

  return (
    <li
      className="search-post"
      onClick={() =>
        goMiniConsulting(id, title, skills, location, career, date, jobtype)
      }
    >
      <p className="search-post-title">{title}</p>
      <p className="search-post-content">
        스택 :{" "}
        {skills.map((s) => (
          <span>{s + ","}</span>
        ))}
      </p>
      <p className="search-post-content">지역 : {location}</p>
      <p className="search-post-content">경력 : {career}년</p>
      <p className="search-post-content">마감 : {dateString}</p>
    </li>
  );
}

export default SearchPost;

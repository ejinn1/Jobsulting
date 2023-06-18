import "./comparepost.css";

function ComparePost({ title, skills, location, career, date, jobtype }) {
  const dateString = date.slice(0, date.indexOf("T"));
  return (
    <div className="compare-post">
      <p className="compare-post-title">{title}</p>
      <p className="compare-post-content">
        스택 :{" "}
        {skills.map((s) => (
          <span>{s + ","}</span>
        ))}
      </p>
      <p className="compare-post-content">지역 : {location}</p>
      <p className="compare-post-content">경력 : {career}년</p>
      <p className="compare-post-content">마감 : {dateString}</p>
      <p className="compare-post-content">직무 형태 : {jobtype}</p>
    </div>
  );
}

export default ComparePost;

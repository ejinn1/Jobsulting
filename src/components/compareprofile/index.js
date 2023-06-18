import "./compareprofile.css";

function CompareProfile({ userData, name }) {
  const location = userData.location;
  const salary = userData.salary;
  const career = userData.career;
  const skills = userData.skills;
  const jobtype = userData.work_type;
  return (
    <div className="compare-post">
      <p className="compare-post-title">{name}</p>
      <p className="compare-post-content">
        스택 :{" "}
        {skills.map((s) => (
          <span>{s + ","}</span>
        ))}
      </p>
      <p className="compare-post-content">지역 : {location}</p>
      <p className="compare-post-content">경력 : {career}년</p>
      <p className="compare-post-content">직무 형태 : {jobtype}</p>
    </div>
  );
}

export default CompareProfile;

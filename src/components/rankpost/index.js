import { Link } from "react-router-dom";
import "./rankpost.css";
import { useState } from "react";

function RankPost({
  rank,
  title,
  keyword,
  company,
  career,
  location,
  education,
  url,
  date,
  closetype,
  education_star,
  experience_star,
  jobtype_star,
  salary_star,
  skill_star,
}) {
  const wldur = location.split(" ");
  const firstLocation = wldur[0];
  const secondLocation = wldur[4];
  const thirdLocation = wldur[5];

  const skfwk = date.split(" ");
  const expiration = skfwk[0];

  let starString1 = "";
  for (let i = 0; i < skill_star; i++) {
    starString1 += "✔️";
  }
  let starString2 = "";
  for (let i = 0; i < education_star; i++) {
    starString2 += "✔️";
  }
  let starString3 = "";
  for (let i = 0; i < experience_star; i++) {
    starString3 += "✔️";
  }
  let starString4 = "";
  for (let i = 0; i < jobtype_star; i++) {
    starString4 += "✔️";
  }
  let starString5 = "";
  for (let i = 0; i < salary_star; i++) {
    starString5 += "✔️";
  }

  // console.log("star", stars);

  return (
    <li className={`rankpost${rank}`}>
      <span className={`rank-badge${rank}`}>{rank}</span>

      <div className="rankpost-info">
        <Link to={url}>
          <p className="name">{company}</p>
          <p className="title">{title}</p>
          <p className="location">
            {firstLocation}
            {secondLocation !== undefined && " - " + secondLocation}
            {thirdLocation !== undefined &&
              thirdLocation !== "&gt;" &&
              " - " + thirdLocation}
          </p>
          <p className="date">
            {closetype === "상시채용" && "상시채용"}{" "}
            {closetype === "채용시" && "채용시 종료"}{" "}
            {closetype === "접수마감일" && `${expiration}`}
          </p>
        </Link>
      </div>
      <div className={`rank-reason${rank}`}>
        {/* <p className="reason-text">지역 : {stars[0]}</p> */}
        <p className="reason-text">
          STACK&nbsp;&nbsp;&nbsp;&nbsp; <strong>{starString1}</strong>
        </p>
        <p className="reason-text">
          SALARY&nbsp;&nbsp; <strong>{starString5}</strong>
        </p>
        <p className="reason-text">
          JOBTYPE&nbsp;<strong>{starString4}</strong>
        </p>
        <p className="reason-text">
          CAREER&nbsp;&nbsp; <strong>{starString3}</strong>
        </p>
        <p className="reason-text">
          SPEC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <strong>{starString2}</strong>
        </p>
      </div>
    </li>
  );
}

export default RankPost;

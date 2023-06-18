import { Link } from "react-router-dom";
import "./post.css";
import { useState } from "react";

function Post({
  title,
  keyword,
  company,
  career,
  location,
  education,
  url,
  date,
  closetype,
  back,
  read_cnt,
  up,
}) {
  const wldur = location.split(" ");
  const firstLocation = wldur[0];
  const secondLocation = wldur[4];
  const thirdLocation = wldur[5];

  const skfwk = date.split(" ");
  const expiration = skfwk[0];

  return (
    <li className="post" style={{ backgroundColor: `${back}` }}>
      <Link to={url}>
        <span className="top" style={{ backgroundColor: `${up}` }} />
        <div className="post-info">
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
          <span className="goob">
            {read_cnt !== undefined && (
              <span>
                {read_cnt}{" "}
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.4 12.6a1.8 1.8 0 1 1 3.6 0v7.2a1.8 1.8 0 0 1-3.6 0v-7.2Zm4.8-.2v6.516a2.4 2.4 0 0 0 1.327 2.148l.06.03a4.8 4.8 0 0 0 2.145.506h6.499a2.4 2.4 0 0 0 2.354-1.93l1.44-7.2a2.398 2.398 0 0 0-2.353-2.87H14.4V4.8A2.4 2.4 0 0 0 12 2.4a1.2 1.2 0 0 0-1.2 1.2v.8a4.8 4.8 0 0 1-.96 2.88L8.16 9.52a4.8 4.8 0 0 0-.96 2.88Z"></path>
                </svg>
              </span>
            )}
          </span>
        </div>
      </Link>
    </li>
  );
}

export default Post;

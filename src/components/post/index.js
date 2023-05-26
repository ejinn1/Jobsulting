import "./post.css";
import { useState } from "react";

function Post({ title, keyword, company, location, education }) {
  const wldur = location.split(" ");
  const firstLocation = wldur[0];
  const secondLocation = wldur[4];
  const thirdLocation = wldur[5];
  // console.log(keyword);
  // 서울 &gt; 서울전체,서울 &gt; 구로구,서울 &gt; 금천구

  // star
  const [star, setStar] = useState(false);

  const onClickStar = () => {
    setStar((current) => !current);
  };

  return (
    <li className="post">
      <div className="post-info">
        <span className="post-star">
          <svg
            className={"star" + `${star ? "-selected" : ""}`}
            onClick={onClickStar}
            width="25"
            height="25"
            fill="none"
            strokelineca="round"
            strokeLinejoin="round"
            strokeWidth="1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.951 2.927c-.299-.921-1.602-.921-1.902 0L9.53 7.601a1 1 0 0 1-.951.69H3.665c-.968 0-1.372 1.24-.588 1.81l3.976 2.888a1 1 0 0 1 .363 1.118l-1.518 4.674c-.3.921.755 1.688 1.538 1.118l3.976-2.888a1 1 0 0 1 1.176 0l3.976 2.888c.783.57 1.838-.196 1.538-1.118l-1.518-4.674a1 1 0 0 1 .363-1.118l3.976-2.888c.783-.57.381-1.81-.588-1.81H15.42a1 1 0 0 1-.95-.69l-1.519-4.674Z"></path>
          </svg>
        </span>
        <p className="name">{company}</p>
        <p className="title">{title}</p>
        <p>
          {firstLocation}
          {secondLocation !== undefined && " - " + secondLocation}
          {thirdLocation !== undefined &&
            thirdLocation !== "&gt;" &&
            " - " + thirdLocation}
        </p>
        {/* <p className="keyword">{keyword}</p> */}
        {/* <p>{thirdLocation}</p> */}
        {/* <p>Education Level: {education}</p> */}
      </div>
    </li>
  );
}

export default Post;

import { Link, useLocation } from "react-router-dom";
import "./main.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "components";

function Main() {
  const [popularPost, setPopularPost] = useState([]);

  const colors_red = [
    "#FFF0F0",
    "#FFE6E6",
    "#FFD9D9",
    "#FFCCCC",
    "#FFBFBF",
    "#FFB2B2",
    "#FFA5A5",
    "#FF9999",
    "#FF8C8C",
    "#FF7F7F",
    "#FF7272",
    "#FF6666",
  ];

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/match/toppost-api/")
      .then((response) => {
        console.log(response.data);
        setPopularPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <main>
        <div className="main-box">
          <div className="main-start">
            <aside className="start-left">
              <dl>
                <dt>AI 개인 맞춤 직무 추천</dt>
                <dd>개인에게 맞는 직무를 추천 받고 싶다면</dd>
              </dl>
              <Link to={"/recommend"}>
                <button>시작하기</button>
              </Link>
            </aside>
            {/* <aside className="start-right"></aside> */}
            {/* <div className="start-bottom-profil">
              <p>
                회원가입을 하지 않으셨나요? <Link to="/join">회원가입</Link>{" "}
                하러가기
              </p>
              <p>
                현재 공고 <Link to="/join">확인</Link> 하러가기
              </p>
              <p>
                최근 트렌드 <Link to="/join">확인</Link> 하러가기
              </p>
            </div> */}
          </div>
        </div>
      </main>
      <div className="mid-container">
        <h1>🔥 인기 공고</h1>
        <ul className="popular-post-wrapper">
          {popularPost.map((item, index) => (
            <Post
              key={item.id}
              title={item.title}
              keyword={item.keyword_name}
              company={item.company_detail_name}
              location={item.location_name}
              education={item.educationlevel_name}
              jobtype={item.jobtype_name}
              url={item.url}
              career={item.experiencelevel_name}
              date={item.expiration_timestamp}
              closetype={item.closetype_name}
              read_cnt={item.read_cnt}
              up={colors_red[index]}
            />
          ))}
        </ul>
      </div>
      <footer></footer>
    </div>
  );
}

export default Main;

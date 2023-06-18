import { useLocation } from "react-router-dom";
import "./result.css";
import { Post } from "components";
import { useEffect, useState } from "react";
import RankPost from "components/rankpost";
import axios from "axios";

function Result() {
  const location = useLocation();
  const resultData = location.state.data;
  console.log(location);
  const rankpost = resultData.slice(0, 3);
  const nomalpost = resultData.slice(4, 16);
  console.log(rankpost);
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  const [keywordPost, setKeywordPost] = useState([]);

  const profile = location.state.content;
  console.log("프로필", profile);

  const [stars, setStars] = useState({});
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setStars(location.state.stars);
    setKeyword(location.state.keyword);
  }, []);

  const userProfile = {
    email: email,
    location: profile.location,
    salary: profile.salary,
    career: profile.career,
    education: profile.education,
    skills: profile.skills,
    work_type: profile.work_type,
  };
  const [save, setSave] = useState(false);

  const ProfilUpdate = async (e) => {
    e.preventDefault();
    setSave(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/update-profile/",
        userProfile
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    if (!keyword) return; // keyword 값이 없으면 실행하지 않습니다.

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/match/keyword/",
          {
            params: {
              keyword: keyword, // GET 요청으로 전달할 keyword 값을 설정합니다.
            },
          }
        );
        console.log("keyword-post", response.data);
        setKeywordPost(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [keyword]);

  const back = [
    "#F6D3E3",
    "#FAECE4",
    "#DBE4E5",
    "#C8E8F4",
    "#CAEAF2",
    "#D6E2EF",
    "#E9E6F2",
    "#F0D9E9",
    "#F9E2DF",
    "#FBE1C3",
    "#FDF1C3",
    "#FAE8DB",
    "#F1EEE5",
    "#E1F2EA",
    "#D5F0F3",
    "#E6F4F1",
    "#EDF6E8",
    "#EEF6F6",
    "#E9F6F9",
    "#DDF7FD",
  ];
  const colors_blue = [
    "#E6F0FF",
    "#D9E9FF",
    "#CCDFFF",
    "#BFE8FF",
    "#B2E0FF",
    "#A5D9FF",
    "#99D2FF",
    "#8CCBFF",
    "#7FC4FF",
    "#72BDFF",
    "#66B6FF",
    "#59AFFF",
  ];

  const colors_green = [
    "#F0FFF0",
    "#E6FFE6",
    "#D9FFD9",
    "#CCFFCC",
    "#BFFFBF",
    "#B2FFB2",
    "#A5FFA5",
    "#99FF99",
    "#8CFF8C",
    "#7FFF7F",
    "#72FF72",
    "#66FF66",
  ];

  return (
    <div className="result-box">
      <h1>AI 결과</h1>
      <div className="result-section-box">
        <h3>{name}님의 프로필</h3>
        <div className="mini-profil-box">
          <span className="save-Btn" onClick={ProfilUpdate}>
            {save ? "완료" : "저장하기"}
          </span>
          <div>
            <p className="mini-profil-title">
              <strong>지역</strong> : {profile.location}
            </p>
            <p className="mini-profil-title">
              <strong>기술 스택</strong> :{" "}
              {profile.skills.map((s) => (
                <span>{s + ","}</span>
              ))}
            </p>
            <p className="mini-profil-title">
              {" "}
              <strong>연봉</strong> : {profile.salary} 만원
            </p>
            <p className="mini-profil-title">
              {" "}
              <strong>경력</strong> : {profile.career} 년
            </p>
            <p className="mini-profil-title">
              <strong>직무 형태</strong> : {profile.work_type}
            </p>
            <p className="mini-profil-title">
              {" "}
              <strong>학력</strong> : {profile.education}
            </p>
          </div>
        </div>
      </div>
      <div className="result-section-box">
        <h3>{name}님의 상위 3개 결과</h3>
        <ul className="top-post-wrapper">
          {rankpost.map((item, index) => (
            <RankPost
              rank={index + 1}
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
              education_star={stars?.education_star?.[index]}
              experience_star={stars?.experience_star?.[index]}
              jobtype_star={stars?.jobtype_star?.[index]}
              salary_star={stars?.salary_star?.[index]}
              skill_star={stars?.skill_star?.[index]}
            />
          ))}
        </ul>
      </div>
      <div className="result-section-box">
        <h3>{name}님의 추가 결과</h3>
        <ul className="result-wrapper">
          {nomalpost.map((item, index) => (
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
              up={colors_blue[index]}
            />
          ))}
        </ul>
      </div>
      <div className="result-section-box">
        <h3>
          {name}님을 위한 대표 키워드 : {keyword}
        </h3>
        <ul className="result-wrapper">
          {keywordPost.map((item, index) => (
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
              up={colors_green[index]}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Result;

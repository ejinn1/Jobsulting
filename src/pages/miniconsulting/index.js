import { useLocation } from "react-router-dom";
import "./miniconsulting.css";
import { useEffect, useState } from "react";
import { ComparePost, CompareProfile, Loading } from "components";

function MiniConsulting() {
  const location = useLocation();
  console.log(location);
  const company_id = location.state.company_id;
  const title = location.state.title;
  const skills = location.state.skills;
  const loca = location.state.location;
  const career = location.state.career;
  const date = location.state.date;
  const jobtype = location.state.jobtype;

  console.log("company_id", company_id);

  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name");
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetchUserProfile();
    }
  }, [email]);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/accounts/get-user-profile/",
        {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("user_data", data);
        setUserData(data);
        sendData(company_id, data);
      } else {
        console.log("Failed to fetch user profile");
      }
    } catch (error) {
      console.log("Error fetching user profile:", error);
    }
  };
  const [resultData, setResultData] = useState({});

  const sendData = async (company_id, data) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/match/mini-consulting/",
        {
          method: "POST",
          body: JSON.stringify({ company_id, data }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json(); // 반환된 JSON 결과 데이터 추출
      setLoading(false);
      setResultData(result);

      console.log("result_data", result);
    } catch (error) {
      console.log("Error fetching user profile:", error);
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="mini_con">
          <div className="mini_con_container">
            <h1>미니 컨설팅 🤓</h1>
            <div className="mini_con_box">
              <div>
                <h2>선택 직무</h2>
                <ComparePost
                  title={title}
                  skills={skills}
                  location={loca}
                  career={career}
                  date={date}
                  jobtype={jobtype}
                />
              </div>
              <div>
                <h2>내 프로필</h2>
                <CompareProfile userData={userData} name={name} />
              </div>
            </div>
            <div>
              <h2>컨설팅 결과</h2>
              <div className="result-post">
                <h3 className="result-post-content">
                  {resultData.skills_result[0] === "해" ? "😃" : "😢"}{" "}
                  {resultData.skills_result}
                </h3>
                <h3 className="result-post-content">
                  {resultData.location_result[16] === "0" ? "😊" : "🤪"}{" "}
                  {resultData.location_result}
                </h3>
                <h3 className="result-post-content">
                  {resultData.career_result[0] === "충" ? "🙃" : "😭"}{" "}
                  {resultData.career_result}
                </h3>
                <h3 className="result-post-content">
                  {resultData.jobtype_result[9] === "합" ? "😆" : "😞"}{" "}
                  {resultData.jobtype_result}
                </h3>
                <h3 className="result-post-content">
                  {resultData.education_result[16] === "합" ? "😁" : "😩"}{" "}
                  {resultData.education_result}
                </h3>
                {/* <h3 className="result-post-man">😗</h3> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MiniConsulting;

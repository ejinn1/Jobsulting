import "./profil.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Profil() {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const [userData, setUserData] = useState({});

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
        console.log(data);
        setUserData(data);
      } else {
        console.log("Failed to fetch user profile");
      }
    } catch (error) {
      console.log("Error fetching user profile:", error);
    }
  };

  return (
    <div className="profil-wrapper">
      <div className="profil-box">
        <h2>{name !== "" ? name : "잡설팅"} 프로필</h2>
        <div className="profil">
          <aside>
            <header>
              <div className="profil-user">
                <div className="user-name">
                  {name !== null ? name : "잡설팅"}
                </div>
                <div className="user-email">
                  {email !== null ? email : "jobsulting@example"}
                </div>
                <Link to={"/"} className="user-edit">
                  기본정보 수정
                </Link>
              </div>
              <div className="profil-status">
                <div className="status-item">
                  <span>관심기업</span>
                  <strong>0</strong>
                </div>
                <div className="status-item">
                  <span>추천기업</span>
                  <strong>0</strong>
                </div>
                <div className="status-item">
                  <span>좋아요</span>
                  <strong>0</strong>
                </div>
              </div>
            </header>
            <div></div>
          </aside>

          <section>
            <div>
              <div className="section-box">
                <div>
                  <h3>프로필</h3>
                  <div>
                    <p>이름: {name !== null ? `${name}` : "잡설팅"}</p>
                    <p>
                      이메일:{" "}
                      {email !== null ? `${email}` : "jobsulting@example"}
                    </p>
                    <p>지역 : {userData.location}</p>
                    <p>
                      스택 :{" "}
                      {userData.skills !== undefined &&
                        userData.skills.map((s) => <span>{s + ", "}</span>)}
                    </p>
                    <p>연봉 : {userData.salary} 만원</p>
                    <p>경력 : {userData.career} 년</p>
                    <p>직무 : {userData.work_type}</p>
                    <p>학력 : {userData.education}</p>
                  </div>
                </div>
              </div>
              <div className="section-box">
                <div>
                  <h3>포트폴리오</h3>
                  <div>
                    <p>깃허브: </p>
                    <p>블로그: </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Profil;

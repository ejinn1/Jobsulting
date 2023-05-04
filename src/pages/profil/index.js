import { Header } from "components";
import "./profil.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Profil() {
  const [user, setUser] = useState({
    name: "유의진",
    email: "ejinn1@naver.com",
    location: "부천",
    carrer: "신입",
    stack: ["React"],
  });

  return (
    <div className="profil-wrapper">
      <Header />
      <div className="profil-box">
        <h2>프로필</h2>
        <div className="profil">
          <aside>
            <header>
              <div className="profil-user">
                <div className="user-name">{user.name}</div>
                <div className="user-email">{user.email}</div>
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
              <div className="section-box">a</div>
              <div className="section-box">a</div>
              <div className="section-box">a</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Profil;

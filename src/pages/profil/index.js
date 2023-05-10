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
    stack: ["React", "HTML"],
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
              <div className="section-box">
                <div>
                  <h3>프로필</h3>
                  <div>
                    <p>이름: {user.name}</p>
                    <p>이메일: {user.email}</p>
                    <p>위치: {user.location}</p>
                    <p>스택: {user.stack.map((s) => s)}</p>
                  </div>
                </div>
              </div>
              <div className="section-box">
                <div>
                  <h3>포트폴리오</h3>
                  <div>
                    <p>깃허브: @@@</p>
                    <p>블로그: @@@</p>
                  </div>
                </div>
              </div>
              <div className="section-box">
                <div>??</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Profil;

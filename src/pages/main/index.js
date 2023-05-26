import { Link, useLocation } from "react-router-dom";
import "./main.css";
import { useEffect } from "react";

function Main() {
  // const location = useLocation();
  // const code = location.state.code;
  // console.log(code);

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
            <div className="start-bottom-profil">
              <p>
                회원가입을 하지 않으셨나요? <Link to="/join">회원가입</Link>{" "}
                하러가기
              </p>
              <p>
                프로필 등록을 하지 않으셨나요?{" "}
                <Link to="/profilForm">프로필 등록</Link> 하러가기
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default Main;

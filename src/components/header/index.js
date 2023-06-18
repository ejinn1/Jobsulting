import { Link } from "react-router-dom";
import "./header.css";
import { useEffect, useRef, useState } from "react";

function Header({ name, email, setName, setEmail, setToken }) {
  const REST_API_KEY = "3520f65988c6ec5c88bc150693095916";
  const LOGOUT_REDIRECT_URI = "http://localhost:3000";

  const handleClicklogout = () => {
    const logoutUri = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
    window.location.href = logoutUri;

    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    console.log("로그아웃!");
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setEmail(localStorage.getItem("email"));
    setName(localStorage.getItem("name"));
  }, [setName, setEmail, setToken]);

  const [view, setView] = useState(false);
  const dropDownRef = useRef(null);

  useEffect(() => {
    function handleCLickOutside(event) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setView(false);
      }
    }

    document.addEventListener("mousedown", handleCLickOutside);
    return () => {
      document.removeEventListener("mousedown", handleCLickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-box">
        <div className="header-title">
          <Link to="/">Jobsulting</Link>
        </div>
        <div className="header-content">
          <nav className="header-nav">
            <Link to={"./search"}>Mini</Link>
            <Link to="/recommend">AI 추천</Link>
            <Link to="/posting">공고</Link>
            <Link to="/trend">트렌드</Link>
          </nav>
          <div className="header-right">
            {name !== null ? (
              <div className="right-login-box">
                <h2 onClick={() => setView((current) => !current)}>
                  <strong>{name}</strong>님
                </h2>
                {view ? (
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.352 8.752a1.2 1.2 0 0 1 1.696 0L12 12.703l3.952-3.951a1.2 1.2 0 1 1 1.696 1.696l-4.8 4.8a1.2 1.2 0 0 1-1.696 0l-4.8-4.8a1.2 1.2 0 0 1 0-1.696Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.648 15.248a1.2 1.2 0 0 1-1.696 0L12 11.297l-3.952 3.951a1.2 1.2 0 0 1-1.696-1.696l4.8-4.8a1.2 1.2 0 0 1 1.696 0l4.8 4.8a1.2 1.2 0 0 1 0 1.696Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}

                {view && (
                  <div ref={dropDownRef} className="dropDown">
                    <div className="drop-box">
                      <ul>
                        <Link to={"/profil"}>
                          <li className="drop-item">내 프로필</li>
                        </Link>
                        <li className="drop-item" onClick={handleClicklogout}>
                          로그아웃
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <div className="login-Btn">
                  <Link to="/join">회원가입/로그인</Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

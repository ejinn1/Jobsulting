import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { useRef, useState } from "react";
import axios from "axios";

function Header({ name, access_token, setName, setEmail, SetToken }) {
  const [isLogin, setIslogin] = useState(false);
  const [view, setView] = useState(false);
  const navigate = useNavigate();

  const onLogin = () => {
    setIslogin((current) => !current);
  };

  const REST_API_KEY = "3520f65988c6ec5c88bc150693095916";
  const LOGOUT_REDIRECT_URI = "http://localhost:3000";

  const handleClicklogout = () => {
    const logoutUri = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
    window.location.href = logoutUri;
    setName("");
    setEmail("");
    SetToken("");
    console.log("로그아웃!");
  };

  // const handleClicklogout = async (access_token) => {
  //   try {
  //     const response = await axios.post(
  //       "http://127.0.0.1:8000/accounts/kakao-logout/",
  //       {
  //         access_token: access_token,
  //       }
  //     );

  //     if (response.status === 200) {
  //       console.log("Successfully logged out");
  //       setName("");
  //       setEmail("");
  //       SetToken("");
  //     } else {
  //       console.error("Logout failed:", response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("An error occurred during logout:", error.message);
  //   }
  // };

  return (
    <header className="header">
      <div className="header-box">
        <div className="header-title">
          <Link to="/">Jobsulting</Link>
        </div>
        <div className="header-content">
          <nav className="header-nav">
            <Link to="/job">직무 탐색</Link>
            <Link to="/recommend">AI 추천</Link>
            <Link to="/profil">내 프로필</Link>
            <Link to="/posting">공고</Link>
          </nav>

          <div className="header-right">
            {/* <div className="input-box">
              <svg
                width="24"
                height="24"
                fill="#afb6b9"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m21.407 19.753-4.41-4.41a8.148 8.148 0 0 0 1.633-4.903c0-4.516-3.674-8.19-8.19-8.19s-8.19 3.674-8.19 8.19 3.674 8.19 8.19 8.19a8.148 8.148 0 0 0 4.902-1.633l4.41 4.41a1.171 1.171 0 0 0 1.655-1.654ZM4.59 10.44a5.85 5.85 0 1 1 5.85 5.85 5.857 5.857 0 0 1-5.85-5.85Z"></path>
              </svg>
              <input
                placeholder="관심 직무 검색!!!"
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
                ref={inputRef}
              />
              {show && (
                <div>
                  <div className="input-suggest">
                    <span
                      className="suggest"
                      onClick={() => handleClick("카카오")}
                    >
                      카카오
                    </span>
                    <span
                      className="suggest"
                      onClick={() => handleClick("우아한 형제들")}
                    >
                      우아한 형제들
                    </span>
                    <span
                      className="suggest"
                      onClick={() => handleClick("네이버")}
                    >
                      네이버
                    </span>
                    <span
                      className="suggest"
                      onClick={() => handleClick("라인")}
                    >
                      라인
                    </span>
                  </div>
                </div>
              )}
            </div> */}
            {/* {isLogin ? (
              <div
                className="login-profil"
                onClick={() => {
                  setView(!view);
                }}
              >
                <svg
                  width="22"
                  height="22"
                  fill="white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 10.8a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM3.6 21.6a8.4 8.4 0 0 1 16.8 0H3.6Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {view && (
                  <div className="dropDown">
                    <div className="drop-box">
                      <ul>
                        <li>
                          <Link to={"/profil"} className="drop-item">
                            내 프로필
                          </Link>
                        </li>
                        <li>
                          <div
                            className="drop-item"
                            onClick={() => {
                              setIslogin(!isLogin);
                              // logout();
                              // setView(!view);
                            }}
                          >
                            로그아웃
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="login-Btn" onClick={onLogin}>
                로그인
              </div>
            )} */}
            {name !== "" ? (
              <>
                <h2>{name} Hi</h2>
                <button onClick={handleClicklogout}>로그아웃</button>
              </>
            ) : (
              <>
                {/* <div className="login-Btn">
                  <Link to="/login">로그인</Link>
                </div> */}
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

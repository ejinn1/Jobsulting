import { Link } from "react-router-dom";
import "./header.css";
import { useRef, useState } from "react";

function Header() {
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setShow(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShow(false);
    }, 200);
  };

  const handleClick = (suggestion) => {
    inputRef.current.value = suggestion;
  };

  return (
    <header className="header">
      <div className="header-box">
        <div className="header-title">
          <Link to="/">Jobsulting</Link>
        </div>
        <div className="header-content">
          <nav className="header-nav">
            <Link to="/">직무 탐색</Link>
            <Link to="/">AI 분석 결과</Link>
            <Link to="/profil">내 프로필</Link>
          </nav>

          <div className="header-right">
            <div className="input-box">
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
                  {/* <div className="suggest-title">인기 검색어</div> */}
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
            </div>
            <div className="login-Btn">
              <Link to="/login">로그인</Link>
            </div>
            <div className="login-Btn">
              <Link to="/join">회원가입</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

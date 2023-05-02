import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (event) => {
    console.log(id, pass);
    event.preventDefault();
  };

  return (
    <div>
      <div className="login-wrapper">
        <div className="login-header">
          <Link to={"/"}>
            <h1 className="logo">Jobsulting</h1>
          </Link>
        </div>
        <div className="login-content">
          <div className="jobsulting-login">
            <form onSubmit={handleSubmit}>
              <div className="id">
                <input
                  type="text"
                  className="input01"
                  value={id}
                  id="txtID"
                  placeholder="아이디 또는 이메일"
                  onChange={(event) => {
                    setId(event.target.value);
                  }}
                />
              </div>
              <div className="pass">
                <input
                  type="text"
                  className="input01"
                  value={pass}
                  id="txtPWD"
                  placeholder="비밀번호"
                  onChange={(event) => {
                    setPass(event.target.value);
                  }}
                />
              </div>
              <div className="btLogin">
                <button type="submit" className="button01">
                  로그인
                </button>
              </div>
            </form>
          </div>
          <p className="login-menu">
            <a href="/join">회원가입</a>
            <a href="#">ID 찾기</a>
            <a href="#">비밀번호 찾기</a>
          </p>
          <div className="tpa">
            <button type="button" className="btFacebook">
              <span className="icon"></span>Facebook 로그인
            </button>
            <button type="button" className="btFacebook">
              <span className="icon"></span>Naver 로그인
            </button>
            <button type="button" className="btFacebook">
              <span className="icon"></span>Google 로그인
            </button>
            <button type="button" className="btFacebook">
              <span className="icon"></span>Apple 로그인
            </button>
          </div>
        </div>
        <div className="login-footer">
          <p>© JOBSULTING Corporation All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;

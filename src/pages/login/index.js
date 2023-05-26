import { useState } from "react";
import "./login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ setKey }) {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const data = {
    email: id,
    password: pass,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:8000/accounts/login/", data, {
        withCredentials: true, // 쿠키를 전송하기 위해 withCredentials 옵션을 설정
      })
      .then((response) => {
        console.log(response.data);
        setKey(response.data.key);
        navigate("/");
      })
      .catch((error) => {
        console.error("에러", error);
      });
  };

  // 카카오
  const location = useLocation();
  const code = location.state.code;
  console.log(code);

  return (
    <div className="login-back">
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
                  placeholder="아이디"
                  onChange={(event) => {
                    setId(event.target.value);
                  }}
                />
              </div>
              <div className="pass">
                <input
                  type="password"
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
          {/* <p className="login-menu">
            <a href="/join">회원가입</a>
            <a href="#">ID 찾기</a>
            <a href="#">비밀번호 찾기</a>
          </p> */}
          {/* <div className="tpa">
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
          </div> */}
        </div>
        <div className="login-footer">
          <p>© JOBSULTING Corporation All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;

import { Link, useNavigate } from "react-router-dom";
import "./join.css";
import { useState } from "react";
import axios from "axios";

function Join() {
  // 카카오
  const REST_API_KEY = "3520f65988c6ec5c88bc150693095916";
  const REDIRECT_URI = "http://localhost:3000/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div className="join-back">
      <div className="join-box">
        <div className="join-header">
          <h1 className="join-title">
            <Link to={"/"} className="joinTitleMain">
              Jobsulting
            </Link>{" "}
            회원가입
          </h1>
          <div className="login-box">
            <Link to={KAKAO_AUTH_URL}>
              <img
                className="kakao_Btn"
                src="./img/kakao_login_large_wide.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;

import { useEffect } from "react";
import "./kakao.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Kakao({ setName, setEmail, setToken }) {
  const href = window.location.href;
  let params = new URL(document.URL).searchParams;
  let code = params.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("리액트에서 보낸 ", code);
    if (code) {
      axios
        .post("http://127.0.0.1:8000/accounts/kakao-login/", { code })
        .then((response) => {
          if (response.status === 200) {
            setName(response.data.name);
            setEmail(response.data.email);
            setToken(response.data.access_token);
            localStorage.setItem("token", response.data.access_token);
            localStorage.setItem("name", response.data.name);
            localStorage.setItem("email", response.data.email);
          }
        })
        .catch((error) => {
          console.log("로그인 실패", error);
        });
    }
    navigate("/", {});
  }, [navigate, code]);

  return (
    <div className="kakao-wait-box">
      <h1>로그인중...</h1>
    </div>
  );
}

export default Kakao;

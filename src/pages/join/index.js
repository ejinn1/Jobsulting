import { Link } from "react-router-dom";
import "./join.css";
import { useState } from "react";

function Join() {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(id, pass, name, birth, phone);
  };

  return (
    <div>
      <div className="join-box">
        <div className="join-header">
          <h1 className="join-title">
            <Link to={"/"} className="joinTitleMain">
              Jobsulting
            </Link>{" "}
            회원가입
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="content-box">
            <div className="item">
              <label htmlFor="id">
                <strong>아이디</strong>
              </label>
              <input
                id="id"
                value={id}
                type="text"
                placeholder="4~20자리 / 영문, 숫자, 특수문자 '_'사용가능"
                onChange={(event) => {
                  setId(event.target.value);
                }}
              />
            </div>
            <div className="item">
              <label htmlFor="pass">
                <strong>비밀번호</strong>
              </label>
              <input
                id="pass"
                value={pass}
                type="text"
                placeholder="8~16자리/영문 대소문자, 숫자, 특수문자 조합"
                onChange={(event) => {
                  setPass(event.target.value);
                }}
              />
            </div>
            <div className="item">
              <label htmlFor="name">
                <strong>이름</strong>
              </label>
              <input
                id="name"
                value={name}
                type="text"
                placeholder="이름 입력"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="item">
              <label htmlFor="birth">
                <strong>생년월일</strong>
              </label>
              <input
                id="birth"
                value={birth}
                type="text"
                placeholder="YYYYMMDD"
                onChange={(event) => {
                  setBirth(event.target.value);
                }}
              />
            </div>
            <div className="item">
              <label htmlFor="phone">
                <strong>휴대폰</strong>
              </label>
              <input
                id="phone"
                value={phone}
                type="text"
                placeholder="'-'빼고 숫자만 입력"
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </div>
          </div>
          <button type="submit" className="join-btn">
            회원가입 완료
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;

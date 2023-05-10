import { Link } from "react-router-dom";
import "./join.css";
import { useState } from "react";

function Join() {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [passCheck, setPassCheck] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [go, setGo] = useState(false);
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [stack, setStack] = useState("");
  const [carrer, setCarrer] = useState("");

  const user_data = {
    id: id,
    pass: pass,
    name: name,
    email: email,
  };
  const profil_data = {
    job: job,
    location: location,
    salary: salary,
    stack: stack,
    carrer: carrer,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user_data", user_data);
    console.log("profil_data", profil_data);
  };

  const onClickProfil = (event) => {
    setGo((current) => !current);
  };

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
        </div>

        <form onSubmit={handleSubmit}>
          <div className="content-box">
            <h1>회원가입</h1>
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
                placeholder="8~16자리 / 영문 대소문자, 숫자, 특수문자 조합"
                onChange={(event) => {
                  setPass(event.target.value);
                }}
              />
            </div>
            <div className="item">
              <label htmlFor="passCheck">
                <strong>비밀번호 재확인</strong>
              </label>
              <input
                id="pass-check"
                value={passCheck}
                type="text"
                placeholder="비밀번호 확인"
                onChange={(event) => {
                  setPassCheck(event.target.value);
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
              <label htmlFor="phone">
                <strong>이메일</strong>
              </label>
              <input
                id="email"
                value={email}
                type="text"
                placeholder="이메일 입략"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="content-box">
            <h1>프로필 등록</h1>
            <div className="item">
              <label htmlFor="job">
                <strong>직무</strong>
              </label>
              <input
                id="job"
                value={job}
                type="text"
                placeholder="직무 입력"
                onChange={(event) => {
                  setJob(event.target.value);
                }}
              />
            </div>
            <div className="item">
              <label htmlFor="region">
                <strong>지역</strong>
              </label>
              <input
                id="location"
                value={location}
                type="text"
                placeholder="지역 입력"
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
              />
            </div>
            <div className="item">
              <label htmlFor="salary">
                <strong>연봉</strong>
              </label>
              <input
                id="salary"
                value={salary}
                type="text"
                placeholder="희망 연봉 입력"
                onChange={(event) => {
                  setSalary(event.target.value);
                }}
              />
            </div>
            <div className="item">
              <label htmlFor="stack">
                <strong>스택</strong>
              </label>
              <input
                id="stack"
                value={stack}
                type="text"
                placeholder="희망 기술 스택 입력"
                onChange={(event) => {
                  setStack(event.target.value);
                }}
              />
            </div>
            <div className="item">
              <label htmlFor="carrer">
                <strong>경력</strong>
              </label>
              <input
                id="carrer"
                value={carrer}
                type="text"
                placeholder="경력 입력"
                onChange={(event) => {
                  setCarrer(event.target.value);
                }}
              />
            </div>
          </div>
          <button type="submit" className="join-btn" onClick={onClickProfil}>
            회원가입 완료
          </button>
        </form>
      </div>
      {/* {go && (
        <div className="backdrop">
          <div className="goToProfilForm">
            <div className="goTo-top">
              <h1>{name}</h1>
            </div>

            <Link
              to={() => ({ pathname: "/profilForm", state: { data: data } })}
            >
              프로필 등록하러 가기
            </Link>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default Join;

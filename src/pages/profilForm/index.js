import { useState } from "react";
import "./profilForm.css";
import { Link } from "react-router-dom";

function ProfilForm(data) {
  const [region, setRegion] = useState("");
  const [salary, setSalary] = useState("");
  const [stack, setStack] = useState("");
  const [carrer, setCarrer] = useState("");
  const [job, setJob] = useState("");
  const [user, setUser] = useState(data);

  return (
    <div className="profil-form-wrapper">
      <h1>프로필 등록</h1>
      <div className="profil-form-box">
        <form>
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
              id="region"
              value={region}
              type="text"
              placeholder="지역 입력"
              onChange={(event) => {
                setRegion(event.target.value);
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
          <Link to={"/"}>
            <button>프로필 등록하기</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ProfilForm;

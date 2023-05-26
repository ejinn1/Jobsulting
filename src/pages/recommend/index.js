import axios from "axios";
import "./recommend.css";
import { useEffect, useState } from "react";
import { Map, SelectBox, Stack } from "components";
import { Link, useNavigate } from "react-router-dom";

function Recommend() {
  const [salary, setSalary] = useState("");
  const [career, setCareer] = useState("");
  const [education, setEducation] = useState("");

  // loading
  const [loading, setLoadion] = useState(false);
  const navigate = useNavigate();

  // location
  const [location, setLocation] = useState("");
  const [seletedLocation, setSelectedLocation] = useState("");
  const [clickedId, setClickedId] = useState("");
  const handelPathClick = (event) => {
    if (event === "") {
      setSelectedLocation("");
    } else {
      // console.log(event.target.classList.value);
      setSelectedLocation(event.target.classList.value);
    }
  };
  const onClickNationwide = () => {
    if (clickedId === "16") {
      setClickedId("");
      setSelectedLocation("");
    } else {
      setClickedId("16");
      setSelectedLocation("전국");
    }
  };

  //stack
  const [stack, setStack] = useState([]);
  const [inputStack, setInputStack] = useState("");
  const [tony, setTony] = useState([]);
  useEffect(() => {
    // 서버로부터 스택 데이터 가져오기
    axios
      .get("http://127.0.0.1:8000/match/stack-api/") // 요청을 보낼 엔드포인트 경로
      .then((response) => {
        // 서버로부터 받은 데이터 처리
        const data = response.data;
        setStack(data); // 스택 데이터 설정
        setTony(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const filtered = stack.filter((item) =>
      item.keyword.toLowerCase().includes(inputStack.toLowerCase())
    );
    setTony(filtered);
  }, [inputStack]);

  const handleinputSearch = (event) => {
    setInputStack(event.target.value);
  };

  const [selectedStack, setSelectedStack] = useState([]);
  const handleStackChange = (stackName) => {
    if (selectedStack.includes(stackName)) {
      setSelectedStack((prevSelectedStack) =>
        prevSelectedStack.filter((stack) => stack !== stackName)
      );
    } else {
      setSelectedStack((prevSelectedStack) => [
        ...prevSelectedStack,
        stackName,
      ]);
    }
  };

  // work-type
  const [workType, setWorkType] = useState([]);
  const [selectedworkType, setSelectedWorkType] = useState("");
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/match/jobtype-api/") // 요청을 보낼 엔드포인트 경로
      .then((response) => {
        // 서버로부터 받은 데이터 처리
        const data = response.data;
        // console.log("wortype", data);
        setWorkType(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleTypeChange = (event) => {
    // console.log(event.target.value);
    setSelectedWorkType(event.target.value);
  };

  // 에듀
  const handleEducationChange = (event) => {
    // console.log(event.target.value);
    setEducation(event.target.value);
  };

  const EDUCATION = [
    {
      id: 0,
      type: "미응답",
    },
    {
      id: 1,
      type: "고등학교졸업",
    },
    {
      id: 2,
      type: "대학졸업(2,3)년",
    },
    {
      id: 3,
      type: "대학교졸업(4년)",
    },
    {
      id: 4,
      type: "석사졸업",
    },
    {
      id: 5,
      type: "박사졸업",
    },
  ];

  // 서버에 요청
  const sendData = (event) => {
    event.preventDefault();
    setLoadion(true);
    const data = {
      location: seletedLocation,
      salary: salary,
      career: career,
      skills: selectedStack,
      work_type: selectedworkType,
      education: education,
    };
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/match/parameter-api/", data)
      .then((response) => {
        console.log(response.data);
        const dataPass = response.data.jobsearch_data_json;
        navigate("/result", { state: { data: dataPass } });
      })
      .catch((error) => {
        console.log(error);
      });
    setSelectedStack([]);
  };

  return (
    <div>
      {loading ? (
        <div className="loading-box">
          <h1>loading...</h1>
        </div>
      ) : (
        <div className="recommend-main">
          <h1>AI 추천</h1>
          <div className="recommend-input-box">
            <h1>선택</h1>
            <form onSubmit={sendData}>
              <div className="item">
                <label htmlFor="location">
                  <strong>지역</strong>
                </label>
                <div>
                  <button
                    type="button"
                    className="nationwide-Btn"
                    onClick={onClickNationwide}
                  >
                    전국
                  </button>
                  <Map
                    setClickedId={setClickedId}
                    clickedId={clickedId}
                    onPathClick={handelPathClick}
                  />
                  <div className="location-select">
                    {seletedLocation !== "" ? (
                      <p>선택 지역 : {seletedLocation}</p>
                    ) : (
                      <p>지역을 선택해주세요.</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="item">
                <div>
                  <label htmlFor="stack">
                    <strong>스택</strong>
                  </label>
                </div>
                <div className="stack-list">
                  {selectedStack.map((s) => (
                    <span>{s}</span>
                  ))}
                </div>
                <input
                  type="text"
                  value={inputStack}
                  onChange={handleinputSearch}
                />
                <div className="stack-wrapper">
                  {tony.map((s) => (
                    <Stack
                      key={s.id}
                      selectedStack={selectedStack}
                      handleStackChange={() => handleStackChange(s.keyword)}
                      keyword={s.keyword}
                    />
                  ))}
                </div>
              </div>
              <div className="item">
                <label htmlFor="salary">
                  <strong>연봉</strong>
                </label>
                <input
                  id="salary"
                  value={salary}
                  type="number"
                  placeholder="연봉 입력 (단위 만원)"
                  onChange={(event) => {
                    setSalary(event.target.value);
                  }}
                />
              </div>
              <div className="item">
                <label htmlFor="carrer">
                  <strong>경력</strong>
                </label>
                <input
                  id="carrer"
                  value={career}
                  type="number"
                  placeholder="경력 입력 (신입이면 0)"
                  onChange={(event) => {
                    setCareer(event.target.value);
                  }}
                />
              </div>
              <div className="item">
                <label htmlFor="workType">
                  <strong>직무형태</strong>
                </label>
                <SelectBox
                  title="직무 형태"
                  options={workType}
                  handleChange={handleTypeChange}
                />
              </div>
              <div className="item">
                <label htmlFor="education">
                  <strong>학력</strong>
                </label>
                <SelectBox
                  title="현재 학력"
                  options={EDUCATION}
                  handleChange={handleEducationChange}
                />
              </div>
              <button type="submit" className="ai-Btn">
                AI 추천
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default Recommend;

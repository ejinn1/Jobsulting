import axios from "axios";
import "./recommend.css";
import { useEffect, useState } from "react";
import { Map, SelectBox, Stack } from "components";
import { Link, useNavigate } from "react-router-dom";

function Recommend() {
  const [salary, setSalary] = useState("");
  const [career, setCareer] = useState("");
  const [workType, setWorkType] = useState("");
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
  const [tony, setTony] = useState(stack);
  useEffect(() => {
    // 서버로부터 스택 데이터 가져오기
    axios
      .get("http://127.0.0.1:8000/match/stack-api/") // 요청을 보낼 엔드포인트 경로
      .then((response) => {
        // 서버로부터 받은 데이터 처리
        const data = response.data;
        setStack(data); // 스택 데이터 설정
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

  // salary
  const handleSalaryChange = (event) => {
    // console.log(event.target.value);
    setSalary(event.target.value);
  };

  // 에듀
  const handleEducationChange = (event) => {
    // console.log(event.target.value);
    setEducation(event.target.value);
  };

  const LOCATION = [
    {
      id: 1,
      location: "서울",
    },
    {
      id: 2,
      location: "경기",
    },
    {
      id: 3,
      location: "인천",
    },
    {
      id: 4,
      location: "부산",
    },
    {
      id: 5,
      location: "대구",
    },
    {
      id: 6,
      location: "광주",
    },
    {
      id: 7,
      location: "대전",
    },
    {
      id: 8,
      location: "울산",
    },
    {
      id: 9,
      location: "세종",
    },
    {
      id: 10,
      location: "강원",
    },
    {
      id: 11,
      location: "경남",
    },
    {
      id: 12,
      location: "경북",
    },
    {
      id: 13,
      location: "전남",
    },
    {
      id: 14,
      location: "전북",
    },
    {
      id: 15,
      location: "충남",
    },
    {
      id: 16,
      location: "충북",
    },
    {
      id: 17,
      location: "제주",
    },
    {
      id: 18,
      location: "전국",
    },
  ];

  const STACK = [
    {
      id: 1,
      name: "그누보드",
    },
    {
      id: 2,
      name: "라즈베리파이",
    },
    {
      id: 3,
      name: "쉘스크립트",
    },
    {
      id: 4,
      name: "스마트컨트랙트",
    },
    {
      id: 5,
      name: "아두이노",
    },
    {
      id: 6,
      name: "액션스크립트",
    },
    {
      id: 7,
      name: "어셈블리",
    },
    {
      id: 8,
      name: "와이어샤크",
    },
    {
      id: 9,
      name: "임베디드리눅스",
    },
    {
      id: 10,
      name: "파워빌더",
    },
    {
      id: 11,
      name: "풀스택",
    },
    {
      id: 12,
      name: ".NET",
    },
    {
      id: 13,
      name: "ABAP",
    },
    {
      id: 14,
      name: "AIX",
    },
    {
      id: 15,
      name: "ASP",
    },
    {
      id: 16,
      name: "ASP.NET",
    },
    {
      id: 17,
      name: "AWS",
    },
    {
      id: 18,
      name: "Ajax",
    },
    {
      id: 19,
      name: "Android",
    },
    {
      id: 20,
      name: "Angular",
    },
    {
      id: 21,
      name: "Apache",
    },
    {
      id: 22,
      name: "ArcGIS",
    },
    {
      id: 1,
      name: "Azure",
    },
    {
      id: 1,
      name: "Bootstrap",
    },
    {
      id: 1,
      name: "C#",
    },
    {
      id: 1,
      name: "C++",
    },
    {
      id: 1,
      name: "COBOL",
    },
    {
      id: 1,
      name: "CSS",
    },
    {
      id: 1,
      name: "CSS3",
    },
    {
      id: 1,
      name: "CentOS",
    },
    {
      id: 1,
      name: "C언어",
    },
    {
      id: 1,
      name: "Delphi",
    },
    {
      id: 1,
      name: "Directx",
    },
    {
      id: 1,
      name: "Django",
    },
    {
      id: 1,
      name: "Docker",
    },
    {
      id: 1,
      name: "ECMAScript",
    },
    {
      id: 1,
      name: "Eclipse",
    },
    {
      id: 1,
      name: "ElasticStack",
    },
    {
      id: 1,
      name: "FLEX",
    },
    {
      id: 1,
      name: "Flask",
    },
    {
      id: 1,
      name: "Flutter",
    },
    {
      id: 1,
      name: "GCP",
    },
    {
      id: 1,
      name: "Git",
    },
    {
      id: 1,
      name: "GoLang",
    },
    {
      id: 1,
      name: "GrapgQL",
    },
    {
      id: 1,
      name: "Groovy",
    },
    {
      id: 1,
      name: "Gulp",
    },
    {
      id: 1,
      name: "HBase",
    },
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 1,
      name: "HTML5",
    },
    {
      id: 1,
      name: "Hadoop",
    },
    {
      id: 1,
      name: "laaS",
    },
    {
      id: 1,
      name: "lonic",
    },
    {
      id: 1,
      name: "JPA",
    },
    {
      id: 1,
      name: "JSP",
    },
    {
      id: 1,
      name: "Java",
    },
    {
      id: 1,
      name: "Javascript",
    },
    {
      id: 1,
      name: "Jenkins",
    },
    {
      id: 1,
      name: "Kotlin",
    },
    {
      id: 1,
      name: "Kubernetes",
    },
    {
      id: 1,
      name: "LabVIEW",
    },
    {
      id: 1,
      name: "Linux",
    },
    {
      id: 1,
      name: "Logstash",
    },
    {
      id: 1,
      name: "Lucene",
    },
    {
      id: 1,
      name: "MFC",
    },
    {
      id: 1,
      name: "MSSQL",
    },
    {
      id: 1,
      name: "MacOS",
    },
    {
      id: 1,
      name: "MariaDB",
    },
    {
      id: 1,
      name: "Matlab",
    },
    {
      id: 1,
      name: "Maven",
    },
    {
      id: 1,
      name: "MongoDB",
    },
    {
      id: 1,
      name: "MyBatis",
    },
    {
      id: 1,
      name: "MySQL",
    },
    {
      id: 1,
      name: "NoSOL",
    },
    {
      id: 1,
      name: "Node.js",
    },
    {
      id: 1,
      name: "Objective-C",
    },
    {
      id: 1,
      name: "OpenCV",
    },
    {
      id: 1,
      name: "OpenGL",
    },
    {
      id: 1,
      name: "OracleDB",
    },
    {
      id: 1,
      name: "PHP",
    },
    {
      id: 1,
      name: "PL/SOL",
    },
    {
      id: 1,
      name: "PaaS",
    },
    {
      id: 1,
      name: "Pandas",
    },
    {
      id: 1,
      name: "Perl",
    },
  ];

  const SALARY = [
    // {
    //   id: 0,
    //   value: "상관없음",
    // },
    {
      id: 1,
      value: "2000",
    },
    {
      id: 6,
      value: "3000",
    },
    {
      id: 11,
      value: "4000",
    },
    {
      id: 12,
      value: "5000",
    },
    {
      id: 13,
      value: "6000",
    },
    {
      id: 14,
      value: "7000",
    },
    {
      id: 15,
      value: "8000",
    },
    {
      id: 16,
      value: "9000",
    },
    // {
    //   id: 17,
    //   value: "1억원",
    // },
  ];

  const EDUCATION = [
    {
      id: 1,
      value: "고등학교졸업",
    },
    {
      id: 2,
      value: "대학졸업(2,3)년",
    },
    {
      id: 3,
      value: "대학교졸업(4년)",
    },
    {
      id: 4,
      value: "석사졸업",
    },
    {
      id: 5,
      value: "박사졸업",
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
      work_type: workType,
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
                <SelectBox
                  title="희망 연봉"
                  options={SALARY}
                  handleChange={handleSalaryChange}
                />
              </div>
              <div className="item">
                <label htmlFor="carrer">
                  <strong>경력</strong>
                </label>
                <input
                  id="carrer"
                  value={career}
                  type="text"
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
                <input
                  id="workType"
                  value={workType}
                  type="text"
                  placeholder="직무 형태"
                  onChange={(event) => {
                    setWorkType(event.target.value);
                  }}
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

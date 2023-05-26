import { Box, Header } from "components";
import "./job.css";
import { useEffect, useState } from "react";

const JOBS_DUMMY = [
  {
    id: 1,
    name: "전체",
    framwork: ["유의진"],
    clicked: true,
  },
  {
    id: 2,
    name: "서버/벡엔드 개발자",
    framwork: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Python",
      "Django",
      "PHP",
      "C++",
      "C#",
      "AWS",
      "MYSQL",
      "Oracle",
    ],
    clicked: false,
  },
  {
    id: 3,
    name: "프론트엔드 개발자",
    framwork: [
      "React",
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Svelte",
      "HTML5",
      "CSS 3",
      "AngularJS",
      "jQuery",
    ],
    clicked: false,
  },
  {
    id: 4,
    name: "웹 풀스택 개발자",
    framwork: [
      "JavaScript",
      "React",
      "Vue.js",
      "jQuery",
      "Node.js",
      "HTML 5",
      "CSS 3",
      "Java",
      "PHP",
    ],
    clicked: false,
  },
  {
    id: 5,
    name: "인드로이드 개발자",
    framwork: ["Kotlin", "Java", "C++", "RxJava"],
    clicked: false,
  },
  {
    id: 6,
    name: "IOS 개발자",
    framwork: ["Swift", "Object-C", "Rxswift", "SwiftUI", "Xcode", "C++"],
    clicked: false,
  },
  {
    id: 7,
    name: "크로스플랫폼 앱개발자",
    framwork: ["Flutter", "React Native", "JavaScript"],
    clicked: false,
  },
  {
    id: 8,
    name: "게임 클라이언트 개발자",
    framwork: [],
    clicked: false,
  },
  {
    id: 9,
    name: "게임 서버 개발자",
    framwork: [],
    clicked: false,
  },
  {
    id: 10,
    name: "DBA",
    framwork: [
      "MySQL",
      "Oracle",
      "MSSQL",
      "PostgreSQL",
      "NoSql",
      "MariaDB",
      "MongoDB",
    ],
    clicked: false,
  },
  {
    id: 11,
    name: "빅데이터 엔지니어",
    framwork: [
      "Python",
      "SQL",
      "R",
      "Hadoop",
      "Spark",
      "Java",
      "Kafka",
      "Tensorflow",
      "PyTorch",
      "Elasticsearch",
    ],
    clicked: false,
  },
  {
    id: 12,
    name: "인공지능/머신러닝",
    framwork: ["a", "b", "c"],
    clicked: false,
  },
  {
    id: 13,
    name: "devops/시스템 엔지니어",
    framwork: ["a", "b", "c"],
    clicked: false,
  },
  {
    id: 14,
    name: "정보보안 담당자",
    framwork: ["a", "b", "c"],
    clicked: false,
  },
];

const DUMMY_PLACE = [
  {
    id: 1,
    name: "메셔",
    title: "[메셔] 프론트엔드 개발자",
    stack: ["JavaScript", "ES6", "React", "TypeScript"],
    location: "강남",
    career: "신입",
    part: 3,
  },
  {
    id: 2,
    name: "푼타컴퍼니",
    title: "온라인 시식 커머스 플랫폼 식후경 프론트엔드 개발자",
    stack: ["JavaScript", "React", "CSS 3", "HTML 5"],
    location: "서울",
    career: "신입~3년",
    part: 3,
  },
  {
    id: 3,
    name: "티오더",
    title: "Backend_Lead 개발자",
    stack: ["AWS", "Node.js", "Docker", "MySQL", "Linux"],
    location: "서울 구로구",
    career: "경력 5~10년",
    part: 2,
  },
  {
    id: 4,
    name: "데이터비",
    title: "백엔드 엔지니어",
    stack: ["Node.js", "AWS", "Python", "AdonisJS"],
    location: "서울 마포구",
    career: "신입~10년",
    part: 2,
  },
  {
    id: 5,
    name: "래브라도랩스",
    title: "서비스 엔진 개발(BackEnd, Java)",
    stack: ["Spring", "Java", "Spring Boot", "MySQL"],
    location: "서울 서초구",
    career: "신입~5년",
    part: 2,
  },
  {
    id: 6,
    name: "드립어스컴퍼니",
    title: "[오디오 플랫폼 PLO] Backend(Junior) 개발자",
    stack: ["Java", "Kotlin", "Go", "Python", "MongoDB", "MSA"],
    location: "서울 서초구",
    career: "신입~3년",
    part: 2,
  },
  {
    id: 7,
    name: "먼치팩토리",
    title: "React Native 프론트엔드 개발자",
    stack: ["React Native", "ios", "Android OS", "Object-C", "Java"],
    location: "서울 강남구",
    career: "경력3~10년",
    part: 3,
  },
  {
    id: 8,
    name: "위허들링",
    title: "위잇딜라이트 프론트엔드 개발자",
    stack: ["React", "HTML5", "CSS 3", "JavaScript", "ios", "Android OS"],
    location: "서울 종로구",
    career: "경력2~10년",
    part: 3,
  },
  {
    id: 9,
    name: "오피지지",
    title: "Front-end Engineer (OGT)",
    stack: ["JavaScript", "Next.js", "HTML5", "CSS 3", "React"],
    location: "서울 강남구",
    career: "경력3~15년",
    part: 3,
  },
];

function Job() {
  const [jobs, setJobs] = useState(JOBS_DUMMY);
  const [idx, setIdx] = useState(1);
  const [stacks, setStacks] = useState(jobs[0].framwork);
  const [findStacks, setFindStacks] = useState([]);
  const [value, setValue] = useState();
  const [place, setPlaces] = useState(DUMMY_PLACE);
  const [show, setShow] = useState(place);

  const checkId = (e) => {
    console.log(e.target.value);
    setIdx(parseInt(e.target.value));
  };

  useEffect(() => {
    setStacks(jobs[idx - 1].framwork);
  }, [idx]);

  useEffect(() => {
    {
      idx !== 1
        ? setShow(place.filter((item) => item.part === idx))
        : setShow(place);
    }
  }, [idx]);

  console.log(findStacks);

  return (
    <div>
      <section className="jobs-list-wrapper">
        <h1>직무 탐색</h1>
        <section className="jobs-list">
          <div className="jobBtn-wrapper">
            <div>
              {jobs.map((item) => (
                <button
                  value={item.id}
                  key={item.id}
                  className={"jobBtn" + (item.id === idx ? "-select" : "")}
                  onClick={checkId}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div>
              {idx !== 1 &&
                stacks.map((s, index) => {
                  return (
                    <button
                      key={index}
                      className={"stackBtn"}
                      // onClick={addFindStacks}
                    >
                      {s}
                    </button>
                  );
                })}
            </div>
          </div>
        </section>
      </section>
      <div className="job-main">
        <div className="job-main-box">
          <div className="selected-jobs">
            {show.map((item) => {
              return (
                <div key={item.id}>
                  <Box
                    name={item.name}
                    title={item.title}
                    stack={item.stack}
                    location={item.location}
                    career={item.career}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;

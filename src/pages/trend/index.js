import React, { useEffect, useState } from "react";
import axios from "axios";
import "./trend.css";
import { Piechart } from "components";

function Trend() {
  const [monthlyCounts, setMonthlyCounts] = useState({});
  const [click, setClick] = useState(0);
  const [day, setDay] = useState(0);
  const [loading, setLoading] = useState(true);

  const POPULAR_STACKS = [
    {
      type: 1,
      code: "277",
      keyword: "React",
    },
    {
      type: 1,
      code: "302",
      keyword: "TypeScript",
    },
    {
      type: 1,
      code: "239",
      keyword: "jQuery",
    },
    {
      type: 1,
      code: "236",
      keyword: "JavaScript",
    },
    {
      type: 1,
      code: "277",
      keyword: "Vue.js",
    },
    {
      type: 1,
      code: "196",
      keyword: "Angular",
    },
    {
      type: 2,
      code: "213",
      keyword: "Django",
    },

    {
      type: 2,
      code: "292",
      keyword: "Spring Boot",
    },
    {
      type: 2,
      code: "258",
      keyword: "Node.js",
    },
    {
      type: 2,
      code: "184",
      keyword: ".NET",
    },
    {
      type: 2,
      code: "235",
      keyword: "Java",
    },
    {
      type: 2,
      code: "272",
      keyword: "Python",
    },
    {
      type: 2,
      code: "218",
      keyword: "Flask",
    },
    {
      type: 2,
      code: "291",
      keyword: "Spring",
    },
    {
      type: 3,
      code: "220",
      keyword: "Flutter",
    },
    {
      type: 3,
      code: "298",
      keyword: "Swift",
    },
    {
      type: 3,
      code: "243",
      keyword: "Kotlin",
    },
    {
      type: 3,
      code: "278",
      keyword: "React-Native",
    },
  ];
  const stacks = POPULAR_STACKS.map((item) => item.code); // POPULAR_STACKS 배열에서 모든 오브젝트의 code 값을 추출하여 배열로 반환

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/match/trend-api/",
        {
          params: { stack: stacks },
        }
      );
      const data = response.data;
      setMonthlyCounts(data.monthly_counts);
      setLoading(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [type1Stacks, setType1Stacks] = useState([]);
  const [type2Stacks, setType2Stacks] = useState([]);
  const [type3Stacks, setType3Stacks] = useState([]);

  useEffect(() => {
    const updatedStacks = POPULAR_STACKS.map((stack) => ({
      ...stack,
      monthly_counts: monthlyCounts[stack.code],
    }));

    setType1Stacks(updatedStacks.filter((item) => item.type === 1));
    setType2Stacks(updatedStacks.filter((item) => item.type === 2));
    setType3Stacks(updatedStacks.filter((item) => item.type === 3));
  }, [monthlyCounts]);

  useEffect(() => {}, [type1Stacks, type2Stacks, type3Stacks]);

  const handleChange = (event) => {
    setDay(event.target.value);
  };

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <div>
      <div className="trend-box">
        <h1>분야별 그래프</h1>
        {loading ? (
          <div>loading...</div>
        ) : (
          <div>
            <div className="trend-nav">
              <div
                className={`trend-Btn${click === 1 ? "-clicked" : ""}`}
                onClick={() => {
                  setClick(1);
                  setDay(0);
                }}
              >
                프론트 엔드
              </div>
              <div
                className={`trend-Btn${click === 2 ? "-clicked" : ""}`}
                onClick={() => {
                  setClick(2);
                  setDay(0);
                }}
              >
                백 엔드
              </div>
              <div
                className={`trend-Btn${click === 3 ? "-clicked" : ""}`}
                onClick={() => {
                  setClick(3);
                  setDay(0);
                }}
              >
                앱
              </div>
            </div>
            <div className="day-box">
              <select
                className="select-day"
                onChange={handleChange}
                defaultValue={0}
              >
                <option value={0}>2022-12</option>
                <option value={1}>2023-01</option>
                <option value={2}>2023-02</option>
                <option value={3}>2023-03</option>
                <option value={4}>2023-04</option>
                <option value={5}>2023-05</option>
              </select>
            </div>
            <div className="graph-box">
              {click === 1 && type1Stacks.length > 0 && (
                <Piechart data={type1Stacks} index={day} />
              )}
              {click === 2 && type2Stacks.length > 0 && (
                <Piechart data={type2Stacks} index={day} />
              )}
              {click === 3 && type3Stacks.length > 0 && (
                <Piechart data={type3Stacks} index={day} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Trend;

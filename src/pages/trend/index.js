import React, { useEffect, useState } from "react";
import axios from "axios";
import "./trend.css";

function Trend() {
  const [stack, setStack] = useState("");
  const [monthlyCounts, setMonthlyCounts] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/match/trend-api/",
        {
          params: { stack: stack },
        }
      );
      const data = response.data;
      setMonthlyCounts(data.monthly_counts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [stack]);

  const handleInputChange = (e) => {
    setStack(e.target.value);
  };

  return (
    <div className="trend-box">
      <input type="text" value={stack} onChange={handleInputChange} />
      <button onClick={fetchData}>Fetch Data</button>
      <ul>
        {Object.entries(monthlyCounts).map(([month, count]) => (
          <li key={month}>
            {month}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trend;

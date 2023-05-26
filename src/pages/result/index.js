import { useLocation } from "react-router-dom";
import "./result.css";
import { Post } from "components";
import { useState } from "react";

function Result() {
  const location = useLocation();
  const resultData = location.state.data;

  return (
    <div className="result-box">
      <h1>결과</h1>
      <ul className="result-wrapper">
        {resultData.map((item) => (
          <Post
            key={item.id}
            title={item.title}
            keyword={item.keyword_name}
            company={item.company_detail_name}
            location={item.location_name}
            education={item.educationlevel_name}
          />
        ))}
      </ul>
    </div>
  );
}
export default Result;

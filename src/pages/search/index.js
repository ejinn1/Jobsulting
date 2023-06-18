import React, { useEffect, useState } from "react";
import axios from "axios";
import "./search.css";
import { SearchPost, SearchPostBox } from "components";

function Search() {
  const [searchText, setSearchText] = useState(""); // 검색어를 저장하는 상태
  const [searchResult, setSearchResult] = useState([]); // 검색 결과를 저장하는 상태
  const [companyList, setCompanyList] = useState([]); // companyList를 저장하는 상태
  const [view, setView] = useState(false);

  // 검색어 입력 시 호출되는 함수
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  // 검색 결과 비동기 호출 함수
  const fetchSearchResult = async () => {
    const response = await axios.post(
      "http://127.0.0.1:8000/match/company-search/",
      {
        company_name: searchText,
      }
    );
    console.log(response.data.data);
    setSearchResult(response.data.data);
  };

  // 검색 결과 상태가 바뀔 때마다 실행되는 useEffect
  useEffect(() => {
    const companyMap = new Map();
    searchResult.forEach((job) => {
      if (!companyMap.has(job.Company)) {
        companyMap.set(job.Company, [job]);
      } else {
        companyMap.set(job.Company, [...companyMap.get(job.Company), job]);
      }
    });
    setCompanyList(
      [...companyMap.keys()].map((company) => ({
        name: company,
        jobs: companyMap.get(company),
      }))
    );
    setView(true);
  }, [searchResult]);

  // 검색 폼 제출 시 호출되는 함수
  const handleFormSubmit = (event) => {
    event.preventDefault(); // 폼의 기본 동작 방지
    fetchSearchResult();
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <h1 className="search-title">기업 검색</h1>
        <div className="search-input-box">
          <h3>원하는 기업을 검색하세요.</h3>
          <form onSubmit={handleFormSubmit}>
            <input
              className="search-input"
              type="text"
              onChange={handleSearchTextChange}
              value={searchText}
            />
            <button className="search-Btn" type="submit" disabled={!searchText}>
              기업명 검색
            </button>
          </form>
          {view && (
            <div className="search-company-box">
              <ul>
                {companyList.map((company, index) => (
                  <li key={index}>
                    <SearchPostBox
                      index={index}
                      company={company}
                      companyList={companyList}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;

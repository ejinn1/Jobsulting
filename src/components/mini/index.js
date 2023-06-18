import { useEffect, useState } from "react";
import "./mini.css";

function Mini({
  resultLocation,
  selectedStack,
  salary,
  selectedworkType,
  education,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMiniProfileClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDocumentClick = (event) => {
    const miniProfileElement = document.getElementById("mini-profile");

    if (miniProfileElement && !miniProfileElement.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  const handleScroll = () => {
    setIsExpanded(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="mini-profile"
      className={`mini-box${isExpanded ? "-expanded" : ""}`}
      onClick={handleMiniProfileClick}
    >
      {isExpanded !== true ? (
        <div>프로필 보기</div>
      ) : (
        <div>
          <p className="mini-title">지역</p>
          <p className="mini-content">{resultLocation}</p>
          <p className="mini-title">스택</p>
          <p className="mini-content">
            {selectedStack.map((s) => (
              <span>{s + ","}</span>
            ))}
          </p>
          <p className="mini-title">연봉</p>
          <p className="mini-content">{salary}</p>
          <p className="mini-title">직무 형태</p>
          <p className="mini-content">{selectedworkType}</p>
          <p className="mini-title">학력</p>
          <p className="mini-content">{education}</p>
        </div>
      )}
    </div>
  );
}

export default Mini;

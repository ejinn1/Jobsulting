import { Header } from "components";
import "./select.css";

function Select() {
  return (
    <div>
      <Header />
      <div className="select-back">
        <div className="select-box">
          <div className="select-Btn">AI 직무 추천받으러 가기</div>
          <div className="select-Btn">어떤 직무가 있는지 보러가기</div>
        </div>
      </div>
    </div>
  );
}

export default Select;

import { Link } from "react-router-dom";
import "./box.css";

function Box({ name, title, stack, location, career }) {
  return (
    <div className="jobBox" onClick={() => console.log(name)}>
      <Link to={"./position"} className="box-go-position">
        <div className="boxImg">{/* <Link to={`/${name}`}/> */}</div>
        <div className="boxInfo">
          <div className="infoBoxCompany">
            <span>{name}</span>
          </div>
          <h2 className="infoPosition">{title}</h2>
          <div>
            <ul className="infoStack">
              {stack.map((s, index) => {
                return <li key={index}>{s}</li>;
              })}
            </ul>
          </div>
          <div>
            <ul className="infoDetail">
              <li>{location}</li>
              <li>{career}</li>
            </ul>
          </div>
          {/* <p className="reason">
          이유: 나도 몰라 몰라 몰라 몰라 몰라 몰라 몰라 몰라 몰라 몰라 몰라 몰라
          몰라 몰라 몰라 몰라 몰라 몰라
        </p> */}
        </div>
      </Link>
    </div>
  );
}

export default Box;

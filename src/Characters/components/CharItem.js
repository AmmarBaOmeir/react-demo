import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { connect } from "react-redux";
import { ShowCharacterDetails } from "../redux/CharacterActions";

const aliveStyle = {
  backgroundColor: "rgb(193, 233, 193)",
  color: "green",
};

const deadStyle = {
  backgroundColor: "rgb(231, 177, 177)",
  color: "crimson",
};

function CharItem(props) {
  let data = props.data;
  return (
    <li>
      <Link
        to="./CharDetails"
        style={{ textDecoration: "none" }}
        onClick={() => props.ShowCharacterDetails(data.char_id)}
      >
        <a href="" style={{ textDecoration: "none" }}>
          <div className="item-container">
            <div className="image">
              <img src={data.img} alt="alt" />
            </div>

            <div className="char-info">
              <div style={{ textAlign: "center" }}>
                <h6
                  id="statusdiv"
                  style={
                    data.status.toLowerCase() === "alive"
                      ? aliveStyle
                      : deadStyle
                  }
                >
                  {data.status}
                </h6>
              </div>
              <div>
                {" "}
                <h5>{data.name}</h5>
              </div>
              <div>
                {" "}
                <h6>{data.nickname}</h6>
              </div>
              <div>
                {" "}
                <h6>{data.category}</h6>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default connect(
  (state) => {
    return state;
  },
  { ShowCharacterDetails }
)(CharItem);

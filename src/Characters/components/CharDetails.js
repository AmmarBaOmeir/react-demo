import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ShowCharacterDetails } from "../redux/CharacterActions";

const aliveStyle = {
  backgroundColor: "rgb(193, 233, 193)",
  color: "green",
  borderRadius: "1rem",
  marginTop: "1rem",
};

const deadStyle = {
  backgroundColor: "rgb(231, 177, 177)",
  color: "crimson",
  borderRadius: "1rem",
  marginTop: "1rem",
};

function CharDetails(props) {
  const [charInfo, setCharInfo] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // var charInfo = null;

  const fetchChars = async () => {
    let apiUrl = `https://www.breakingbadapi.com/api/characters/${props.CharacterReducer.id}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log("Single Char Info: ", data[0]);
    setCharInfo(data[0]);
    setLoaded(true);
  };

  useEffect(() => {
    fetchChars();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "1rem",
      }}
    >
      {loaded ? (
        <div className="details-container">
          <div style={{ textAlign: "center" }}>
            <h6
              id="statusdiv"
              style={
                charInfo.status.toLowerCase() === "alive"
                  ? aliveStyle
                  : deadStyle
              }
            >
              {charInfo.status}
            </h6>
          </div>
          <div className="header-profile">
            <img src={charInfo.img} alt="alt" />
            <div>
              <h3>{charInfo.name}</h3>
              <h6>{charInfo.nickname}</h6>
            </div>
          </div>
          <div className="info" style={{ textAlign: "left" }}>
            <h6>Birthday: {charInfo.birthday}</h6>
            <h6>Category: {charInfo.category}</h6>
            <h6
              style={{
                marginBottom: "0",
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0",
              }}
            >
              Occupation:{" "}
            </h6>
            <h6
              style={{
                backgroundColor: "rgb(218, 181, 168)",
                marginTop: "0",
                borderTopLeftRadius: "0",
                borderTopRightRadius: "0",
              }}
            >
              {charInfo.occupation.map((occ) => {
                return (
                  <ul>
                    <li>{occ}</li>
                  </ul>
                );
              })}
            </h6>

            <h6>Portrayed: {charInfo.portrayed} </h6>
          </div>
        </div>
      ) : (
        " Loding... "
      )}{" "}
    </div>
  );
}

export default connect(
  (state) => {
    return state;
  },
  { ShowCharacterDetails }
)(CharDetails);

import React, { useState } from "react";
import { GetCharacters } from "../redux/CharacterActions";
import { connect } from "react-redux";
import CharItem from "./CharItem";

function CharsList(props) {
  // const [selectedId, setSelectedId] = useState(false);

  //   console.log("CharsList Props(payload): ", props);
  //   console.log("CharsList Props(payload) Length: ", props);

  const renderCharacters = () => {
    // console.log("CharsList renderCharacters: ", props.payLoad);

    return (
      <ul className="list-chars">
        {props.chars.map((item) => {
          return (
            <CharItem
              data={item}
              // selectedItem={setSelectedId}
            />
          );
        })}
      </ul>
    );
  };

  return (
    <div className="chars-list-container">
      <h2>List Of Characters</h2>
      <div className="chars-list">
        {props.loaded === true ? renderCharacters() : " Loading..."}
        {/* {console.log("CharacterReducer Length: ", props.CharacterReducer.Chars)} */}
      </div>
    </div>
  );
}

export default connect(
  (state) => {
    console.log("from connect CharsList: ", state.CharacterReducer);
    return state;
  },
  { GetCharacters }
)(CharsList);

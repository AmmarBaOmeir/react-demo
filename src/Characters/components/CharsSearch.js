import React, { useState } from "react";
// import { connect } from "react-redux";
// import { GetCharacters } from "../redux/CharacterActions";

function CharsSearch(props) {
  const [searchKey, setSearchKey] = useState("");
  let filterList;
  if (props.data !== null) {
    filterList = props.data.filter((da) => {
      // console.log("Search Key: ", searchKey, " data Filtered name: ", da.name);
      return (
        da.name.toLowerCase().includes(searchKey.toLowerCase()) ||
        da.nickname.toLowerCase().includes(searchKey.toLowerCase()) ||
        da.category.toLowerCase().includes(searchKey.toLowerCase()) ||
        da.status.toLowerCase().includes(searchKey.toLowerCase())
      );
    });
  }

  return (
    <div className="search-container">
      <input
        className="text"
        type="text"
        placeholder="search for..."
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <input
        className="btn btn-primary"
        type="submit"
        value="Search"
        onClick={() => props.setchars(filterList)}
      />
    </div>
  );
}

export default CharsSearch;

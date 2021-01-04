import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./Characters.css";
import CharsList from "./components/CharsList";
import CharsSearch from "./components/CharsSearch";

function Characters() {
  const [loaded, setLoaded] = useState(false);
  const [chars, setChars] = useState(null);
  const [filterChars, setFilterChars] = useState(null);
  // const [selectedId, setSelectedId] = useState(false);

  const fetchChars = async () => {
    let apiUrl = "https://www.breakingbadapi.com/api/characters";
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log("data: ", data);
    setChars(data);
    setFilterChars(data);
    setLoaded(true);
  };

  useEffect(() => {
    fetchChars();
    // props.GetCharacters();
    // setLoaded(props.loaded);
  }, []);

  return (
    <div className="chars-container">
      <CharsSearch data={chars} setchars={setFilterChars} />
      <CharsList
        loaded={loaded}
        chars={filterChars}
        // selectedItem={setSelectedId}
      />
    </div>
  );
}

export default Characters;

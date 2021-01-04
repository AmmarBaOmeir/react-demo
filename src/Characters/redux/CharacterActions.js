// import axios from "axios";
// import axios from "axios";

import {
  FILTER_CHARACTERS,
  DETAIL_CHARACTERS,
  GET_CHARACTERS,
} from "./CharacterTypes";

let baseUrl = "https://www.breakingbadapi.com/";
let apiCharsPath = "api/characters";

export const fetchData = async () => {
  let allData;

  await fetch(`${baseUrl}${apiCharsPath}`)
    .then((response) => {
      // console.log("Response from Get Characters : ", response);
      return response.json();
    })
    .then((data) => {
      // console.log("Data from Get Characters allData : ", data);
      allData = data;
      return data;
    })
    .catch((er) => {
      allData = [{ name: "Ammar Mohammed", nickname: "Frontend Developer" }];
    });

  console.log("... Data from Get Characters allData : ", allData);

  return allData;
};

export const GetCharacters = (data, searchKey) => {
  // let da = fetchData();
  console.log("Data after fetch all data: " + data);
  return {
    type: GET_CHARACTERS,
    payLoad: data,
    filter: searchKey,
  };
};

export const FilterCharacters = (id, text) => {
  console.log("Filter Characters: ", text);
  return {
    type: FILTER_CHARACTERS,
    id,
    text,
  };
};

export const ShowCharacterDetails = (id) => {
  console.log("Show Character Details: ", id);

  return {
    type: DETAIL_CHARACTERS,
    id,
  };
};

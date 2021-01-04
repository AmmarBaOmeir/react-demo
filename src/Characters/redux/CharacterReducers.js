import {
  FILTER_CHARACTERS,
  DETAIL_CHARACTERS,
  GET_CHARACTERS,
} from "./CharacterTypes";

const initState = {
  Chars: [],
  loaded: false,
  filter: "",
  id: "",
};

const CharacterReducers = (state = initState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      // Chars = action.payLoad;
      console.log("payload from Characters Reducer Get All : ", state);
      if (state.filter === "") {
        state = {
          Chars: action.payLoad,
          loaded: true,
          filter: action.filter,
        };
        return state;
      } else {
        state = {
          Chars: state.Chars.filter((f) => {
            return f.name === state.filter;
          }),
          loaded: true,
          filter: action.filter,
        };
        return state;
      }
    case DETAIL_CHARACTERS:
      const obj = {
        id: action.id,
      };
      console.log("Characters Reducer Get Details action : ", obj);
      return obj;
    default:
      return state;
  }
};

export default CharacterReducers;

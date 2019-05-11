import {
  ADD_PLANETS,
  UPDATE_SEARCH_KEY,
  planetsInitialState as initialState
} from "../constants";

const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLANETS:
      return {
        ...state,
        planets: action.planets
      };
    case UPDATE_SEARCH_KEY:
      return {
        ...state,
        searchKey: action.searchKey
      };
    default:
      return state;
  }
};

export default planetsReducer;

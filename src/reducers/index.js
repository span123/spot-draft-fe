import { combineReducers } from "redux";
import films from "./films.reducer";
import planetsList from "./planets.reducer";

const rootReducer = combineReducers({
  films,
  planetsList
});

export { rootReducer };

import { service } from "./../services/api";
import config from "../config.json";

import { ADD_PLANETS, UPDATE_SEARCH_KEY } from "./../constants";

const addPlanets = (planets = []) => ({
  type: ADD_PLANETS,
  planets
});

export const fetchPlanetsAndDispatch = () => dispatch => {
  service.get(config.PLANETS_URL).then(async _data => {
    let planetObj = _data;
    if (planetObj) {
      //console.log("planets data", planetObj);
      let planets = [...planetObj.results];
      while (planetObj.next) {
        planetObj = await service.get(planetObj.next);
        planetObj && (planets = [...planets, ...planetObj.results]);
        dispatch(addPlanets(planets));
      }
    }
  });
};

export const setSearchKey = searchKey => ({
  type: UPDATE_SEARCH_KEY,
  searchKey: searchKey.toLowerCase()
});

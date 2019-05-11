import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchResultCard from "./SearchResultCard";
import "./css/SearchResultContainer.css";

export default class SearchResultHolder extends Component {
  render() {
    let { searchKey, planets } = this.props,
      loadingCharacters = planets.length === 0;
    return (
      <>
        <div className="mt-50">
          {searchKey ? (
            <div>Searching for characters with "{searchKey}" in name</div>
          ) : (
            <div>Showing All Planets</div>
          )}
        </div>
        <div className="row search-result-container">
          {//Show loading till planets data is available
          loadingCharacters ? (
            <>
              <div className="col-12 m-auto">Loading Planets...</div>
            </>
          ) : (
            planets.map(planet => {
              let show =
                searchKey !== ""
                  ? planet.name.toLowerCase().includes(searchKey)
                  : true;
              return (
                <SearchResultCard
                  key={planet.name + planet.created + planet.diameter}
                  {...planet}
                  show={show}
                />
              );
            })
          )}
        </div>
      </>
    );
  }
}

SearchResultHolder.propTypes = {
  planets: PropTypes.array.isRequired,
  searchKey: PropTypes.string.isRequired
};

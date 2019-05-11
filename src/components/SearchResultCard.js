import React, { Component } from "react";
import PropTypes from "prop-types";
import "./css/SearchResultCard.css";

export default class SearchResultCard extends Component {
  render() {
    let { name, show } = this.props;
    return (
      <div
        className="col-3 search-result-card"
        style={{ display: show ? "block" : "none" }}
      >
        <div className="search-result-card-container">
          <div className="search-result-card-header">Planet: {name}</div>
          <div className="search-result-card-header">
            <button onClick={this.clickHandler}>ADD</button>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Function to save planet name, diameter, population in localStorage with planet name as key
   */
  clickHandler = () => {
    if (this.props.name !== localStorage.getItem(this.props.name)) {
      let planetObj = {
        name: this.props.name,
        diameter: this.props.diameter,
        population: this.props.population
      };
      localStorage.setItem(this.props.name, JSON.stringify(planetObj));
      return alert("Planet added to localStorage");
    }
    return alert("Planet alredy present in localStorage");
  };
}

SearchResultCard.propTypes = {
  name: PropTypes.string
};

import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBox from "./atomic/SearchBox";
import SearchResultHolder from "./container/SearchResultHolderContainer";

export default class Planets extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 search-box-mt">
            <SearchBox
              updateSearchKey={this.props.updateSearch}
              searchTitle="Search Planet by name."
              placeholder="Search..."
            />
          </div>
          <div className="col-12">
            <SearchResultHolder />
          </div>
        </div>
      </div>
    );
  }
}

Planets.propTypes = {
  updateSearch: PropTypes.func.isRequired
};

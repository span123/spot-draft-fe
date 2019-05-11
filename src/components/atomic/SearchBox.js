import React, { Component } from "react";
import PropTypes from "prop-types";
import "./../css/SearchBox.css";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    // Create reference to access the search box
    this.searchText = React.createRef();
  }

  componentDidMount = () => {};

  render() {
    let { searchTitle, placeholder } = this.props;

    return (
      <div className={`search-box`}>
        <p className={`search-title`}>{searchTitle}</p>
        <input
          type="text"
          placeholder={placeholder}
          onChange={this.onChangeHandler}
          ref={this.searchText}
        />
      </div>
    );
  }

  // Function that takes current value of searched text and calls updateSearchKey method passed as props

  onChangeHandler = () => {
    this.props.updateSearchKey &&
      this.props.updateSearchKey(this.searchText.current.value);
  };
}

SearchBox.defaultProps = {
  searchTitle: "",
  placeholder: "",
  searchBoxClassName: "",
  searchTitleClassName: "",
  inputClassName: ""
};

SearchBox.propTypes = {
  searchTitle: PropTypes.string,
  placeholder: PropTypes.string,
  searchBoxClassName: PropTypes.string,
  searchTitleClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  updateSearchKey: PropTypes.func
};

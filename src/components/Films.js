import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "./atomic/Card";
import "./css/Films.css";

export default class Films extends Component {
  render() {
    let films = this.props.films,
      dataLoaded = films.length > 0;

    return (
      <div className="container-fluid">
        <div className="row" style={{ padding: "10px" }}>
          {dataLoaded ? (
            films.map((_film, index) => {
              return (
                <div className="col-4 mt-20" key={_film.title + index}>
                  <Card
                    cardClasses="row p-10 m-10"
                    content={this.getFilmContent(_film)}
                  />
                </div>
              );
            })
          ) : (
            <div className="col-12">
              <div>Loading...</div>
            </div>
          )}
        </div>
      </div>
    );
  }

  /**
   * Function that returns React Element (film info)
   **/
  getFilmContent = film => {
    return (
      <>
        <div>Title: {film.title}</div>
        <div>Director: {film.director}</div>
        <div>Producer: {film.producer}</div>
        <div>Release Date: {film.release_date}</div>
      </>
    );
  };
}

Films.propTypes = {
  films: PropTypes.array.isRequired
};

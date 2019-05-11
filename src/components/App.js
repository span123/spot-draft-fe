import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Planets from "./container/PlanetsContainer";
import Films from "./Films";
import "./css/App.css";

class App extends Component {
  componentDidMount() {
    /**
     * To fetch planet and film data
     */
    this.props.fetchFilms();
    this.props.fetchPlanets();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/*
           *  /  Planets component
           *  /films  Films component
           *  /[any]  fallback to Planets Component
           */}
          <Switch>
            <Route exact path={`/`} component={Planets} />
            <Route path={`/planets`} component={Planets} />
            <Route
              path={`/films`}
              render={() => <Films films={this.props.films} />}
            />
            <Redirect from="/" to="/planets" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  fetchFilms: PropTypes.func.isRequired,
  fetchPlanets: PropTypes.func.isRequired
};

export default App;

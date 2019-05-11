import { connect } from "react-redux";
import App from "./../App";
import { fetchFilmsAndDispatch } from "./../../actions/films.action";
import { fetchPlanetsAndDispatch } from "./../../actions/planets.action";

const mapStateToProps = state => ({
  films: state.films.films
});

const mapDispatchToProps = dispatch => ({
  fetchFilms: () => dispatch(fetchFilmsAndDispatch()),
  fetchPlanets: () => dispatch(fetchPlanetsAndDispatch())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

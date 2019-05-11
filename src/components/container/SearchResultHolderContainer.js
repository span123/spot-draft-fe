import { connect } from "react-redux";
import SearchResultHolder from "./../SearchResultHolder";

const mapStateToProps = state => ({
  planets: state.planetsList.planets,
  searchKey: state.planetsList.searchKey
});

export default connect(mapStateToProps)(SearchResultHolder);

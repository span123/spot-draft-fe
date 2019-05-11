import { connect } from "react-redux";
import Planets from "../Planets";
import { setSearchKey } from "../../actions/planets.action";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  updateSearch: searchKey => dispatch(setSearchKey(searchKey))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Planets);

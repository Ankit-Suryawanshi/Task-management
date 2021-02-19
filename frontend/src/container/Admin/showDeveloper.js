import { connect } from 'react-redux';
import { requestAllDeveloper, setDeveloperData, } from '../../actions';
import ShowDeveloper from "../../components/Admin/showDeveloper";

const mapStateToProps = (state, ownProps) => ({
  data: state
});

const mapDispatchToProps = {
  requestAllDeveloper,
  setDeveloperData,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDeveloper);
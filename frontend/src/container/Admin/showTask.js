import { connect } from 'react-redux';
import { requestAllTask, setUserData, } from '../../actions';
import ShowTask from "../../components/Admin/showTask";

const mapStateToProps = (state, ownProps) => ({
  data: state
});

const mapDispatchToProps = {
  requestAllTask,
  setUserData,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTask);
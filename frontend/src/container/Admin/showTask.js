import { connect } from 'react-redux';
import { requestAllTask, requestDeleteTask, setUserData, } from '../../actions';
import ShowTask from "../../components/Admin/showTask";

const mapStateToProps = (state, ownProps) => ({
  data: state
});

const mapDispatchToProps = {
  requestAllTask,
  requestDeleteTask,
  setUserData,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTask);
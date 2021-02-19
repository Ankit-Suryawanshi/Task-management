import { connect } from 'react-redux';
import { requestGenerateTask, setUserData } from '../../actions';
import GenerateTask from "../../components/Admin/generateTask";
const mapDispatchToProps = {
  requestGenerateTask,
  setUserData,
}

export default connect('', mapDispatchToProps)(GenerateTask);
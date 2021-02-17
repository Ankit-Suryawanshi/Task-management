import { connect } from 'react-redux';
import { requestGenerateTask } from '../../actions';
import GenerateTask from "../../components/Admin/generateTask";
const mapDispatchToProps = {
  requestGenerateTask
}

export default connect('', mapDispatchToProps)(GenerateTask);
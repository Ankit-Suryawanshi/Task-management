import { connect } from 'react-redux';
import { requestSigin } from '../actions';
import SignUp from "../components/signup";
const mapDispatchToProps = {
  requestSigin 
}

export default connect('', mapDispatchToProps)(SignUp);
import { connect } from 'react-redux';
import { requestSigin } from '../actions';
import SignUp from "../components/signup";

const mapStateToProps = (state, ownProps) => ({
  data: state
});

const mapDispatchToProps = {
  requestSigin 
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
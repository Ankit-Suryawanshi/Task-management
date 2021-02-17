import { connect } from 'react-redux';
import { requestLogin } from '../actions';
import Login from "../components/login";

const mapStateToProps = (state, ownProps) => ({
  data: state
});

const mapDispatchToProps = {
  requestLogin, 
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
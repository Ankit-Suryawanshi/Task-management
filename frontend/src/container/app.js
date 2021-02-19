import { connect } from 'react-redux';
import App from "../App";

const mapStateToProps = (state, ownProps) => ({
  data: state
});

const mapDispatchToProps = { 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
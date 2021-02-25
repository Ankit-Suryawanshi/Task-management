import React, { Component } from "react";
import CommonNavSection from "./commonNavSection";

export default class Login extends Component {
	state = {
		name:'',
		role:'user',
		email:'',
		contact:'',
		password:''
	};

	handleChange = (e)=>{
		this.setState({ [e.target.name]: e.target.value})
	}

	handleSubmit = (e)=> {
		this.props.requestLogin(this.state);
		e.preventDefault();
	}

	componentDidUpdate = (prevProp)=> {
		if(this.props.data.rootReducers.userData && this.props.data.rootReducers.userData.role === 'admin')
			this.props.history.push('/generate-task')
		if(this.props.data.rootReducers.userData && this.props.data.rootReducers.userData.role === 'user')
			this.props.history.push('/')
	}

	componentDidMount = (prevProp)=> {
		if(this.props.data.rootReducers.userData && this.props.data.rootReducers.userData.role === 'admin')
			this.props.history.push('/generate-task')
		if(this.props.data.rootReducers.userData && this.props.data.rootReducers.userData.role === 'user')
			this.props.history.push('/')
	}

	render() {
		const commonNavLink = {
      linkOne: '/sign-in',
      pathOne: 'Sign in',
      linkTwo: '/sign-up',
      pathTwo: 'Sign up',
    }
		return (
			<div className="auth-inner">
				<CommonNavSection commonNavLink={commonNavLink} noHandleLogout/>
				<form>
					<h3>Sign In</h3>

					<div className="form-group">
						<label>Email address</label>
						<input type="email" className="form-control" placeholder="Enter email" name='email' onChange={this.handleChange}/>
					</div>

					<div className="form-group">
						<label>Password</label>
						<input type="password" className="form-control" placeholder="Enter password" name='password' onChange={this.handleChange}/>
					</div>

					<div className="form-group">
						<div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="customCheck1" />
							<label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
						</div>
					</div>

					<button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
					<p className="forgot-password text-right">
						Forgot <a href='/'>password?</a>
					</p>
				</form>
			</div>
		);
	}
}
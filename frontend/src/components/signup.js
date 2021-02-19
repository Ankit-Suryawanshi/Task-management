import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class SignUp extends Component {
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
		e.preventDefault();
		this.props.requestSigin(this.state);
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
		return (
			<div className="auth-inner">
				<nav className="navbar navbar-expand-lg navbar-light fixed-top">
					<div className="container">
						<Link className="navbar-brand" to={"/sign-in"}>Test management applicatoin</Link>
						<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<Link className="nav-link" to={"/sign-in"}>Sign in</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to={"/sign-up"}>Sign up</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<form>
					<h3>Sign Up</h3>

					<div className="form-group">
						<label>First name</label>
						<input type="text" className="form-control" placeholder="First name" value={this.state.name} name='name' onChange={this.handleChange} />
					</div>
					<label>Role</label>
					<div className="form-check d-flex">
						<input
							className="form-check-input"
							type="radio"
							name="role"
							id="flexRadioDefault1"
							value='admin'
							onChange={this.handleChange}
						/>
						<label className="form-check-label" for="flexRadioDefault1"> Admin </label>
					</div>

					<div className="form-check d-flex">
						<input
							className="form-check-input"
							type="radio"
							name="role"
							id="flexRadioDefault2"
							value='user'
							onChange={this.handleChange}
							defaultChecked
						/>
						<label className="form-check-label" for="flexRadioDefault2"> User </label>
					</div>

					<div className="form-group">
						<label>Email address</label>
						<input type="email" className="form-control" placeholder="Enter email" name='email' onChange={this.handleChange}/>
					</div>

					<div className="form-group">
						<label>Contact</label>
						<input type="number" className="form-control" placeholder="Contact" name='contact' onChange={this.handleChange}/>
					</div>

					<div className="form-group">
						<label>Password</label>
						<input type="password" className="form-control" placeholder="Enter password" name='password' onChange={this.handleChange}/>
					</div>

					<button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Sign Up</button>
					<p className="forgot-password text-right">
						Already registered <a href="/sign-in">sign in?</a>
					</p>
				</form>
			</div>
		);
	}
}
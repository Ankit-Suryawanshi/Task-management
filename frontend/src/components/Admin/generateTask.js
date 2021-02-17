import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class GenerateTask extends Component {
	state = {
		title:'',
		status:'new',
		assigned_to:'',
		description:'',
		created_at:'',
    deadline:'',
	};

	handleChange = (e)=>{
		this.setState({ [e.target.name]: e.target.value})
	}

	handleSubmit = (e)=> {
    this.props.requestGenerateTask(this.state);
    e.preventDefault();
	}

  handleLogout = ()=> {
    localStorage.clear();
    this.props.history.push('/sign-in')
  }
  

	render() {
		return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>Test management applicatoin</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Available Task</Link>
                  </li>
                  <li className="nav-item">
                    <button type="button" className="btn btn-link nav-link" to={"/sign-up"} onClick={this.handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        <form>
          <h3>Generate Task</h3>

          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" placeholder="Title" value={this.state.title} name='title' onChange={this.handleChange} />
          </div>
          <label>Status</label>
          <div className="form-check d-flex">
            <input
              className="form-check-input"
              type="radio"
              name="status"
              id="flexRadioDefault1"
              value='new'
              onChange={this.handleChange}
              defaultChecked
            />
            <label className="form-check-label" for="flexRadioDefault1"> New </label>
          </div>

          <div className="form-check d-flex">
            <input
              className="form-check-input"
              type="radio"
              name="status"
              id="flexRadioDefault2"
              value='assigned'
              onChange={this.handleChange}
            />
            <label className="form-check-label" for="flexRadioDefault2"> Assigned </label>
          </div>

          <div className="form-check d-flex">
            <input
              className="form-check-input"
              type="radio"
              name="status"
              id="flexRadioDefault3"
              value='done'
              onChange={this.handleChange}
            />
            <label className="form-check-label" for="flexRadioDefault3"> Done </label>
          </div>

          <div className="form-group">
            <label>Assigned To</label>
            <input type="text" className="form-control" placeholder="Assigned To" name='assigned_to' onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label>Description</label>
            <input type="text" className="form-control" placeholder="Description" name='description' onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label>Created At</label>
            <input type="date" className="form-control" placeholder="Created At" name='created_at' onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label>deadline</label>
            <input type="date" className="form-control" placeholder="Deadline" name='deadline' onChange={this.handleChange}/>
          </div>

          <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Generate</button>
        </form>
      </>
		);
	}
}
import React, { Component } from "react";
import moment from 'moment';
import CommonNavSection from "../commonNavSection";
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
		this.setState({ [e.target.name]: e.target.value});
	}

	handleSubmit = (e)=> {
    this.props.requestGenerateTask(this.state);
    e.preventDefault();
	}

  handleLogout = ()=> {
    localStorage.clear();
    this.props.setUserData({});
    this.props.history.push('/sign-in');
  }

  componentDidMount = ()=> {
    if(this.props.location.state) {
      this.setState({ title: this.props.location.state.title,
        objectId: this.props.location.state._id,
        status: this.props.location.state.status,
        assigned_to: this.props.location.state.assigned_to,
        description: this.props.location.state.description,
        created_at: moment(this.props.location.state.created_at).utc().format('YYYY-MM-DD'),
        deadline: moment(this.props.location.state.deadline).utc().format('YYYY-MM-DD'),
      });
    }
  }

	render() {
    const commonNavLink = {
      linkOne: '/available-task',
      pathOne: 'Available Task',
      linkTwo: '/show-developer',
      pathTwo: 'Available Developer',
    }
    
		return (
      <div className="auth-inner">
        <CommonNavSection commonNavLink={commonNavLink} handleLogout={this.handleLogout}/>
        <form>
          <h3>Generate Task</h3>

          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" placeholder="Title" value={this.state.title} name='title' onChange={this.handleChange} />
          </div>
          <label>Status</label>
          <div className="row ml-1">
          <div className="form-check col-4">
            <input
              className="form-check-input"
              type="radio"
              name="status"
              id="flexRadioDefault1"
              value='new'
              onChange={this.handleChange}
            />
            <label className="form-check-label" for="flexRadioDefault1"> New </label>
          </div>

          <div className="form-check col-4">
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

          <div className="form-check d-flex col-4">
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
          </div>
          <div className="form-group">
            <label>Assigned To</label>
            <input type="text" className="form-control" placeholder="Assigned To" value={this.state.assigned_to} name='assigned_to' onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea rows="3" col="10" className="form-control" placeholder="Description" value={this.state.description} name='description' onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label>Created At</label>
            <input type="date" className="form-control" placeholder="Created At" value={this.state.created_at} name='created_at' onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label>deadline</label>
            <input type="date" className="form-control" placeholder="Deadline" value={this.state.deadline} name='deadline' onChange={this.handleChange}/>
          </div>

          <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Generate</button>
        </form>
      </div>
		);
	}
}
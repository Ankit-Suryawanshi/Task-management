import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import './index.css';

export default class GenerateTask extends Component {
  
  state = {
		searchBy:'',
    sortBy:'asc',
	};

  componentDidMount = ()=> {
		this.props.requestAllTask({sort: 1, sortKey: 'title'});
	}

  handleChange = (e)=>{
		this.setState({ searchBy: e.target.value})
	}

  handleLogout = ()=> {
    localStorage.clear();
    this.props.setUserData({});
    this.props.history.push('/sign-in');
  }

	render() {
    const dataTo = this.props.data.rootReducers.taskData || [];
    const dataToMap = dataTo.filter((d) => { 
      return d.title.includes(this.state.searchBy) || d.status.includes(this.state.searchBy) || d.assigned_to.includes(this.state.searchBy);
    });
    const handleSort = (key)=> {
      this.props.requestAllTask({sort: this.state.sortBy === 'asc' ? -1 : 1, sortKey: key});
      this.setState({sortBy: this.state.sortBy === 'asc' ? 'desc' : 'asc'});
    }
		return (
      <div className="auth-innertable">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>Test management applicatoin</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/generate-task"}>Genetate Task</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/show-developer"}>Available Developer</Link>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-link nav-link" to={"/sign-up"} onClick={this.handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-6">
            <div id="example_filter" className="dataTables_filter">
              <label>Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="example" onChange={this.handleChange}/></label>
            </div>
          </div>
        </div>
        <div className='table-scroll'>
          <table id="example" className="table table-striped table-bordered table-sortable" style={{ 'width':'100%' }}>
            <thead>
              <tr>
                <th className={this.state.sortBy} onClick={()=>handleSort('title')}>Title</th>
                <th className={this.state.sortBy} onClick={()=>handleSort('status')}>Status</th>
                <th className={this.state.sortBy} onClick={()=>handleSort('assigned_to')}>Assigned To</th>
                <th className={this.state.sortBy} onClick={()=>handleSort('description')}>Description</th>
                <th className={this.state.sortBy} onClick={()=>handleSort('creadted_at')}>Created At</th>
                <th className={this.state.sortBy} onClick={()=>handleSort('deadline')}>Deadline</th>
              </tr>
            </thead>
            <tbody>
            {
              dataToMap.map((d)=> {
                return <tr onClick={()=>console.log('Row in clicked')}>
                  <td>{d.title}</td>
                  <td>{d.status}</td>
                  <td>{d.assigned_to}</td>
                  <td>{d.description}</td>
                  <td>{moment(d.created_at).utc().format('MM/DD/YYYY')}</td>
                  <td>{moment(d.deadline).utc().format('MM/DD/YYYY')}</td>
                </tr>
              })
            }
            </tbody>
          </table>
        </div>
      </div>
		);
	}
}
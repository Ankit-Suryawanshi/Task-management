import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import './index.css';

export default class ShowDeveloper  extends Component {
  
  state = {
		searchBy:'',
    sortBy:'asc',
	};

  componentDidMount = ()=> {
		this.props.requestAllDeveloper({sort: 1, sortKey: 'title'});
	}

  handleChange = (e)=>{
		this.setState({ searchBy: e.target.value})
	}

  handleLogout = ()=> {
    localStorage.clear();
    this.props.setDeveloperData({});
    this.props.history.push('/sign-in');
  }

	render() {
    const dataTo = this.props.data.rootReducers.developerData || [];
    const dataToMap = dataTo.filter((d) => { 
      return d.name.includes(this.state.searchBy) || d.email.includes(this.state.searchBy) || d.role.includes(this.state.searchBy);
    });
    const handleSort = (key)=> {
      this.props.requestAllDeveloper({sort: this.state.sortBy === 'asc' ? -1 : 1, sortKey: key});
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
                    <Link className="nav-link" to={"/available-task"}>Available Task</Link>
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
                <th className={this.state.sortBy} onClick={()=>handleSort('name')}>Name</th>
                <th className={this.state.sortBy} onClick={()=>handleSort('email')}>Email</th>
                <th className={this.state.sortBy} onClick={()=>handleSort('contact')}>Contact</th>
                <th className={this.state.sortBy} onClick={()=>handleSort('role')}>Role</th>
              </tr>
            </thead>
            <tbody>
            {
              dataToMap.map((d)=> {
                return <tr>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.contact}</td>
                  <td>{d.role}</td>
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
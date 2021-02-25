import React, { Component } from "react";
import { Button, Modal } from 'react-bootstrap';
import CommonNavSection from "../commonNavSection";
import moment from 'moment';
import './index.css';

export default class GenerateTask extends Component {
  
  state = {
		searchBy:'',
    sortBy:'asc',
    openPopover: '',
    onMouseOverPointer: false,
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

  handlePopupColse = ()=> {
    this.setState({ openPopover: ''});
  }

  handleDeleteTask = (id) => {
    this.props.requestDeleteTask(id);
    this.setState({ openPopover: ''});  
    window.location.reload(false);
  }

  handleEditTask = () => {
    this.props.history.push('/generate-task', this.state.openPopover);
    this.setState({ openPopover: ''});
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
    const commonNavLink = {
      linkOne: '/generate-task',
      pathOne: 'Genetate Task',
      linkTwo: '/show-developer',
      pathTwo: 'Available Developer',
    }
		return (
      <div className="auth-innertable">
        <CommonNavSection commonNavLink={commonNavLink} handleLogout={this.handleLogout}/>
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
              { dataToMap.map((d)=> {
                  return <tr className={this.state.onMouseOverPointer ? "showPointer" : ''} onClick={()=>this.setState({openPopover: d})} onMouseOver={()=>this.setState({onMouseOverPointer : true})} onMouseOut={()=>this.setState({onMouseOverPointer : false})} >
                    <td className="tableColumeWidth">{d.title}</td>
                    <td className="tableColumeWidth">{d.status}</td>
                    <td className="tableColumeWidth">{d.assigned_to}</td>
                    <td className="tableColumeWidth">{d.description}</td>
                    <td className="tableColumeWidth">{moment(d.created_at).utc().format('DD/MM/YYYY')}</td>
                    <td className="tableColumeWidth">{moment(d.deadline).utc().format('DD/MM/YYYY')}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
        <div className="container">
          <Modal size="lg" show={this.state.openPopover} onHide={this.handlePopupColse}>
            <Modal.Header closeButton>
              <Modal.Title>{this.state.openPopover.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>Description</h5>
              {this.state.openPopover.description}
              <div className="mt-3">
                <h5>Other Details</h5>
                <div className="row">
                  <div className="col-6">
                    <span>Assign To : </span> <span>{this.state.openPopover.assigned_to}</span>
                  </div>
                  <div className="col-6">
                    <span>Status : </span> <span>{this.state.openPopover.status}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <span>Created At : </span> <span>{moment(this.state.openPopover.created_at).utc().format('DD/MM/YYYY')}</span>
                  </div>
                  <div className="col-6">
                    <span>Deadline : </span> <span>{moment(this.state.openPopover.deadline).utc().format('DD/MM/YYYY')}</span>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handlePopupColse}>
                Close
              </Button>
              <Button variant="success" onClick={this.handleEditTask}>
                Edit
              </Button>
              <Button variant="danger" onClick={()=>this.handleDeleteTask(this.state.openPopover._id)}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </div>     
      </div>
		);
	}
}
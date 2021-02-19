import { SET_USERDATA, SET_ALL_TASK, SET_ALL_DEVELOPER } from '../actions';
const initialState = {};
const data = (state = initialState, action) => {
  switch(action.type) {
    case SET_USERDATA: 
      return {...state, userData: action.data}
    case SET_ALL_TASK: 
      return {...state, taskData: action.data}
    case SET_ALL_DEVELOPER: 
      return {...state, developerData: action.data}
    default:
      return state;
  }
} 

export default data;
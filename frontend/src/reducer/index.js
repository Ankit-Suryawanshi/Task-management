import { SET_USERDATA } from '../actions';
const initialState = {};
const data = (state = initialState, action) => {
  switch(action.type) {
    case SET_USERDATA: 
      return {...state, userData: action.data}
    default:
      return state;
  }
} 

export default data;
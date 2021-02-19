export const SET_USERDATA = 'SET_USERDATA';
export const SET_ALL_TASK = 'SET_ALL_TASK';
export const SET_ALL_DEVELOPER = 'SET_ALL_DEVELOPER';

export const setUserData = (data)=> ({type: SET_USERDATA, data});
export const setAllTask = (data)=> ({type: SET_ALL_TASK, data});
export const setDeveloperData = (data) => ({type: SET_ALL_DEVELOPER, data}); 
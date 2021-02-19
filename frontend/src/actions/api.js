export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const REQUEST_SIGIN = 'REQUEST_SIGIN';
export const REQUEST_GENERATE_TASK = 'REQUEST_GENERATE_TASK';
export const REQUEST_ALL_TASK = 'REQUEST_ALL_TASK';
export const REQUEST_ALL_DEVELOPER = 'REQUEST_ALL_DEVELOPER';

export const requestLogin = (item) =>({type: REQUEST_LOGIN, item});
export const requestSigin = (item) =>({type: REQUEST_SIGIN, item});
export const requestGenerateTask = (item) => ({type: REQUEST_GENERATE_TASK, item});
export const requestAllTask = (item) => ({type: REQUEST_ALL_TASK, item});
export const requestAllDeveloper = (item) => ({type: REQUEST_ALL_DEVELOPER, item});
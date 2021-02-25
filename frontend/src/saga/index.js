import { all, put, takeEvery } from 'redux-saga/effects';
import { 
  REQUEST_SIGIN, REQUEST_LOGIN,
  REQUEST_GENERATE_TASK,
  REQUEST_DELETE_TASK, 
  setUserData, 
  REQUEST_ALL_TASK,
  setAllTask,
  setDeveloperData,
  REQUEST_ALL_DEVELOPER} from '../actions';

function* watchRequestLogin() {
  yield takeEvery(REQUEST_LOGIN, function* ({ item }){
    try {
      const response = yield fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body:JSON.stringify(item),
      })
      const res = yield response.json();
      localStorage.setItem('token', res.token);
      alert(res.message);
      yield put(setUserData(res.data));
    } catch (err) {
      console.log(err);
    }
  })
}

function* watchRequestSigin() {
  yield takeEvery(REQUEST_SIGIN, function* ({ item }){
    try {
      yield fetch('http://localhost:3001/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      const responseLogin = yield fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body:JSON.stringify(item),
      })
      const resLog = yield responseLogin.json();
      localStorage.setItem('token', resLog.token);
      alert(resLog.message);
      yield put(setUserData(resLog.data));

    } catch (err) {
      console.log(err);
    }
  })
}

function* watchRequestGenerateTask() {
  yield takeEvery(REQUEST_GENERATE_TASK, function* ({ item }){
    try {
      const response = yield fetch('http://localhost:3001/api/generatetask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      response.json().then(res=>alert(res.msg));
    } catch (err) {
      console.log(err);
    }
  })
}

function* watchRequestAllTask() {
  yield takeEvery(REQUEST_ALL_TASK, function* ({item}){
    try {
      const response = yield fetch(`http://localhost:3001/api/allTaskInfo?sort=${JSON.stringify(item)}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
      const res = yield response.json();
      yield put(setAllTask(res.taskData));
    } catch (err) {
      console.log(err);
    }
  })
}

function* watchRequestAllDeveloper() {
  yield takeEvery(REQUEST_ALL_DEVELOPER, function* ({item}){
    try {
      const response = yield fetch(`http://localhost:3001/api/allDeveloperInfo?sort=${JSON.stringify(item)}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
      const res = yield response.json();
      yield put(setDeveloperData(res.userData));
    } catch (err) {
      console.log(err);
    }
  })
}

function  *watchRequestDeleteTask() {
  yield takeEvery(REQUEST_DELETE_TASK, function * ({item}) {
    try{
      console.log(item);
      const response = yield fetch(`http://localhost:3001/api/deleteTask?id=${item}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
        },
      });
      response.json().then(res=>alert(res.msg));
    } catch (err) {
      console.log(err);
    }
    
  })
}

export default function* rootSaga () {
  yield all([
    watchRequestLogin(),
    watchRequestSigin(),
    watchRequestGenerateTask(),
    watchRequestAllTask(),
    watchRequestAllDeveloper(),
    watchRequestDeleteTask(),
  ]);
}
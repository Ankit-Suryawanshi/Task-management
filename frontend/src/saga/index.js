import { all, put, takeEvery } from 'redux-saga/effects';
import { 
  REQUEST_SIGIN, REQUEST_LOGIN,
  REQUEST_GENERATE_TASK, 
  setUserData } from '../actions';

function* watchRequestLogin() {
  //console.log('In watchRequestLogin');
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
      console.log(res);
      localStorage.setItem('token', res.token);
      alert(res.message);
      //this.props.history.push('/admin-home');
      yield put(setUserData(res.data));
    } catch (err) {
      console.log(err);
    }
  })
}

function* watchRequestSigin() {
  //console.log('In watchRequestLogin');
  yield takeEvery(REQUEST_SIGIN, function* ({ item }){
    try {
      const response = yield fetch('http://localhost:3001/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      response.json().then(res=>alert(res.message));
    } catch (err) {
      console.log(err);
    }
  })
}

function* watchRequestGenerateTask() {
  yield takeEvery(REQUEST_GENERATE_TASK, function* ({ item }){
    try {
      console.log(item);
      const response = yield fetch('http://localhost:3001/api/generatetask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      response.json().then(res=>alert(res.message));
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
  ]);
}
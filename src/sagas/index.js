import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_REPO_LIST_BY_USER_NAME,
  getRepoListByUserNameSuccess,
  getRepoListByUserNameError
} from '../actions';

export function* fetchRepos(data) {
  const endpoint = `https://api.github.com/users/${data.payload.userName}/repos`;
  try {
    const response = yield call(fetch, endpoint);
    const repoData = yield response.json();
    yield put(getRepoListByUserNameSuccess(repoData));
  } catch (ex) {
    yield put(getRepoListByUserNameError());
  }
}

export function* getRepoListByUserName() {
  yield takeEvery(GET_REPO_LIST_BY_USER_NAME, fetchRepos);
}

export default function* rootSaga() {
  yield all([getRepoListByUserName()]);
}

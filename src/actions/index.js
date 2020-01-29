export const GET_REPO_LIST_BY_USER_NAME = 'GET_REPO_LIST_BY_USER_NAME';
export const GET_REPO_LIST_BY_USER_NAME_SUCCESS =
  'GET_REPO_LIST_BY_USER_NAME_SUCCESS';
export const GET_REPO_LIST_BY_USER_NAME_ERROR =
  'GET_REPO_LIST_BY_USER_NAME_ERROR';
export const CLEAN = 'MY_APP_GIT/GIT_REPO/CLEAN';

export function getRepoListByUserName(userName) {
  return {
    type: GET_REPO_LIST_BY_USER_NAME,
    payload: {
      userName
    }
  };
}

export function getRepoListByUserNameSuccess(repos) {
  return {
    type: GET_REPO_LIST_BY_USER_NAME_SUCCESS,
    payload: {
      repos
    }
  };
}

export function getRepoListByUserNameError() {
  return {
    type: GET_REPO_LIST_BY_USER_NAME_ERROR
  };
}

export function clean(repos) {
  return {
    type: CLEAN
  };
}

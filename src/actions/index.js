export const GET_REPO_LIST_BY_USER_NAME = 'GET_REPO_LIST_BY_USER_NAME';
export const GET_REPO_LIST_BY_USER_NAME_SUCCESS =
  'GET_REPO_LIST_BY_USER_NAME_SUCCESS';

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

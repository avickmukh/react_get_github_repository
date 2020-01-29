import {
  GET_REPO_LIST_BY_USER_NAME,
  GET_REPO_LIST_BY_USER_NAME_SUCCESS,
  GET_REPO_LIST_BY_USER_NAME_ERROR,
  CLEAN
} from '../actions';

const initialState = {
  repos: [],
  isLoading: false
};

export default function GitRepoApp(state = initialState, action) {
  switch (action.type) {
    case GET_REPO_LIST_BY_USER_NAME:
      return {
        ...state,
        isLoading: true,
        repos: []
      };
    case GET_REPO_LIST_BY_USER_NAME_SUCCESS:
      return {
        ...state,
        repos: action.payload.repos,
        isLoading: false
      };
    case CLEAN:
      return {
        ...state,
        ...initialState
      };
    case GET_REPO_LIST_BY_USER_NAME_ERROR:
      return {
        ...state,
        repos: [],
        isLoading: false
      };
    default:
      return { ...state, ...initialState };
  }
}

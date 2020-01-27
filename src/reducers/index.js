import {
  GET_REPO_LIST_BY_USER_NAME,
  GET_REPO_LIST_BY_USER_NAME_SUCCESS
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
        isLoading: true
      };
    case GET_REPO_LIST_BY_USER_NAME_SUCCESS:
      console.log(action.payload.repos);
      return {
        ...state,
        repos: action.payload.repos,
        isLoading: false
      };
    default:
      return state;
  }
}

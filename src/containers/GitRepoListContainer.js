import { connect } from 'react-redux';
import { getRepoListByUserName } from '../actions';
import GitRepoList from '../components/GitRepoList';

const mapDispatchToProps = {
  getRepoListByUserName
};

const mapStateToProps = state => {
  return {
    repos: state.repos
  };
};

const GitRepoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GitRepoList);

export default GitRepoListContainer;

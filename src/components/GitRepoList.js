import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import GitRepo from './GitRepo';
import SearchUser from './SearchUser';
import CircularProgress from '@material-ui/core/CircularProgress';

const GitRepoList = ({ repos, getRepoListByUserName, isLoading }) => (
  <>
    <SearchUser getRepoListByUserName={getRepoListByUserName} />
    {
      isLoading && 
      <CircularProgress variant="determinate" value={isLoading} color="secondary" />
    }
    { repos && 
    (<Jumbotron>
      <ListGroup>
        {
          repos.map((repo, index) => <GitRepo key={repo.id} {...repo} />)}
      </ListGroup>
    </Jumbotron>)
    }
  </>
);

GitRepoList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  getRepoListByUserName: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default GitRepoList;

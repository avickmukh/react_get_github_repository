import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import GitRepo from './GitRepo';
import SearchUser from './SearchUser';

const GitRepoList = ({ repos, getRepoListByUserName }) => (
  <>
    <SearchUser getRepoListByUserName={getRepoListByUserName} />
    <Jumbotron>
      <ListGroup>
        {repos &&
          repos.map((repo, index) => <GitRepo key={repo.id} {...repo} />)}
      </ListGroup>
    </Jumbotron>
  </>
);

GitRepoList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  getRepoListByUserName: PropTypes.func.isRequired
};

export default GitRepoList;

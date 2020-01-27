import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Route } from 'react-router-dom';
import GitRepoListContainer from './containers/GitRepoListContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <Route exact path="/" component={GitRepoListContainer} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

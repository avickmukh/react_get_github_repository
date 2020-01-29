import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const NavigationBar = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
  background-color: lightgray;
`;

let SearchUser = ({ getRepoListByUserName }) => {
  let input;

  return (
    <NavigationBar>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          getRepoListByUserName(input.value);
          input.value = '';
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Please Enter Github User Id"
              ref={node => {
                input = node;
              }}
            />
            <InputGroup.Append>
              <Button type="submit">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </NavigationBar>
  );
};
SearchUser.propTypes = {
  getRepoListByUserName: PropTypes.func.isRequired
};
export default SearchUser;

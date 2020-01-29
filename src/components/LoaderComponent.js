import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoaderComponent = props => (
  <div className="sweet-loading">
    <ClipLoader
      css={override}
      size={100}
      color={'#123abc'}
      loading={props.loading}
    />
  </div>
);

LoaderComponent.propTypes = {
  loading: PropTypes.bool.isRequired
};
export default LoaderComponent;

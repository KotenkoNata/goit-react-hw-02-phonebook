import React from 'react';

import PropTypes from 'prop-types';

import styles from './Filter.module.css';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label className={styles.filter}>
      Find contacts by name{' '}
      <input type="text" value={filter} onChange={onChangeFilter} />
    </label>
  );
};

Filter.defaultProps = {
  filter: '',
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;

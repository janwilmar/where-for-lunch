import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.css';

const Checkbox = ({ onChangeAction, defaultValue, defaultLabel }) => (
  <div className={styles.root}>
    <input type="checkbox" onChange={onChangeAction} value={defaultValue} /><span>{ defaultLabel }</span>
  </div>
);

Checkbox.propTypes = {
  defaultLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChangeAction: PropTypes.func,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};


export default Checkbox;

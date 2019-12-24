import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={'button is-danger'} onClick={props.removed} disabled={props.disabled}>
      Less
    </button>
    <button className={'button is-success'} onClick={props.added}>
      More
    </button>
  </div>
);

export default BuildControl;

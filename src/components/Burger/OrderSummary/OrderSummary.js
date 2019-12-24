import React from 'react';
import Aux from '../../../hoc/Auxx';
import classes from './OrderSummary.module.css';

const OrderSummary = props => {
  const ingredients = Object.keys(props.ingredients).map(key => (
    <li key={'__' + key}>
      <span className={classes.Label}>{key}</span>: <span>{props.ingredients[key]}</span>
    </li>
  ));

  return (
    <Aux>
      <ul className='content'>{ingredients}</ul>
      <div className='content'>
        <strong className='is-pulled-right'>Total Price: {props.totalPrice}</strong>
        <br/>
        <p className='is-pulled-right'>Continue to checkout</p>
      </div>
    </Aux>
  );
};

export default OrderSummary;

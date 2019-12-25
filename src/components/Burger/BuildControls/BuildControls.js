import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = props => (
  <div className={'container'}>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientsAdded(control.type)}
        removed={() => props.ingredientsRemoved(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
    <div className='box'>
      <article className='media'>
        <div className='media-content'>
          <div className='content'>
            <h4 className='is-2'>Current Price : {props.totalPrice}</h4>
            <button className='button is-dark is-medium' disabled={!props.purchaseable} onClick={props.orderNow}>
              ORDER NOW
            </button>
          </div>
        </div>
      </article>
    </div>
  </div>
);

export default BuildControls;

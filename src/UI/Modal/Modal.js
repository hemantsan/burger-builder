import React from 'react';

const Modal = props => {
  const classes = `modal ${props.isModalOpen ? 'is-active' : ''}`;
  return (
    <div className={classes}>
      <div className='modal-background'></div>
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>Your order</p>
          <button className='delete' aria-label='close' onClick={props.orderCancel}></button>
        </header>
        <section className='modal-card-body'>
          <h2 class='subtitle'>Please verify your order ingredients:</h2>
          {props.children}
        </section>
        <footer className='modal-card-foot'>
          <button className='button is-success'>Checkout</button>
          <button className='button is-text has-text-danger' onClick={props.orderCancel}>Cancel</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;

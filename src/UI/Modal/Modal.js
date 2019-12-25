import React from 'react';

class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <div className={this.props.show ? 'modal is-active' : 'modal'}>
        <div className='modal-background'></div>
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>Your order</p>
            <button className='delete' aria-label='close' onClick={this.props.orderCancel}></button>
          </header>
          <section className='modal-card-body'>
            <h2 className='subtitle'>Please verify your order ingredients:</h2>
            {this.props.children}
          </section>
          <footer className='modal-card-foot'>
            <button className='button is-success'>Checkout</button>
            <button className='button is-text has-text-danger' onClick={this.props.orderCancel}>Cancel</button>
          </footer>
        </div>
      </div>
    );
  }
  
};

export default Modal;

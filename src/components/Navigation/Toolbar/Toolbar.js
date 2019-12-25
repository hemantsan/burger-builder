import React from 'react';
import classes from './Toolbar.module.css';

const Toolbar = () => {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='https://bulma.io'>
            <strong>BigBurger</strong>
          </a>

          <a role='button' className='navbar-burger burger' href='/'>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <a className='navbar-item' href='/home'>
              Home
            </a>
            <a className='navbar-item' href='/home'>
              Documentation
            </a>
            <a className='navbar-item' href='/home'>
              Documentation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;

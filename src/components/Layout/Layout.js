import React from 'react';
import Auxx from '../../hoc/Auxx';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = props => (
  <Auxx>
    <Toolbar />
    <section className='section'>
      <main className={classes.Content}>{props.children}</main>
    </section>
  </Auxx>
);

export default Layout;

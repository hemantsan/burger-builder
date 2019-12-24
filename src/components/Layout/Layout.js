import React from 'react';
import Auxx from '../../hoc/Auxx';
import classes from './Layout.module.css';

const Layout = props => (
  <Auxx>
    <main className={classes.Content}>{props.children}</main>
  </Auxx>
);

export default Layout;
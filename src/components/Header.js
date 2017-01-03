import React from 'react';
import Nav from './Nav'

const Header = (props) => (
  <header className="mw7 center pv3">
    <Nav />
    <h2 className="sans-serif f2 mt0 mb2">Hello, { props.name }</h2>
  </header>
);

export default Header;

import React from 'react';

const Header = (props) => (
  <header className="mw7 center">
    <h2 className="sans-serif f2">Hello, { props.name }</h2>
  </header>
);

export default Header;

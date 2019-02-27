import React from 'react';

const Header = props => <div className="header">{props.children}</div>;

Header.defaultProps = {
  children: 'Header',
};

export default Header;

import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: FC = () => (
  <nav id="header">
    <NavLink to="/page1">Page 1</NavLink>
    <br/>
    <NavLink to="/page2">Page 2</NavLink>
  </nav>
);

export default Navbar;

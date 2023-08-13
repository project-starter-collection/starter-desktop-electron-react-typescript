import React, { FC } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from './Navbar';

const Layout: FC = () => (
  <>
    <div>Layout</div>
    <Navbar />
    <Outlet />
  </>
);

export default Layout;

import React from 'react';
import { Header } from './index';

function Layout({ children }) {
  return (
    <>
      <Header />
      { children }
    </>
  )
}

export default Layout;
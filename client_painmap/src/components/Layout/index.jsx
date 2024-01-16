import React from 'react';
import Background from '../Background';
import Header from '../Header';
import './styles.css';


const Layout = ({ children }) => {
  return (
    <>
      <div className="app-layout">
        <Background />
        <div className="page-content">
          {children}
        </div>
      </div>
        <Header />
    </>
  );
};

export default Layout;

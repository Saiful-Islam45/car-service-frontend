import React from 'react';
import Header from '../ui/Header';
import Footer from '../ui/Footer';

const RootLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="site-wrap" id="home-section">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;

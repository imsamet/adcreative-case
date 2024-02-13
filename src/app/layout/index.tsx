import React from 'react';
import { Props } from './core/_models';
import Navigation from './components/navigation';

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default Layout;

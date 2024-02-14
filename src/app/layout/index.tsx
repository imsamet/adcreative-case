import React from 'react';
import { Props } from './core/_models';
import Navigation from './components/navigation';
import Footer from './components/footer';

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main style={{ minHeight: '100vh', backgroundImage: `url('/bg.webp')` }}>
      <Navigation />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
import React, { ReactNode } from 'react';
import Layout from './app/layout';
import { Outlet } from 'react-router-dom';

type Props = {
  children?: ReactNode;
};
const App: React.FC<Props> = ({}) => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default App;

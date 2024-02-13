import { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';

const { BASE_URL } = import.meta.env;

const AppRoutes: FC = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<>Home</>} />
          <Route path="/storybook" element={<>storybook</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

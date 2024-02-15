import { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './app/pages/HomePage';
import DependenciesPage from './app/pages/DependenciesPage';

const { BASE_URL } = import.meta.env;

const AppRoutes: FC = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dependencies" element={<DependenciesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

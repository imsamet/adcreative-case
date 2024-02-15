import React from 'react';
import Heading from '../../elements/heading';

const Dependencies: React.FC = ({}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Heading type="h2" label="All Dependencies" />
          <ul>
            <li>@reduxjs/toolkit: 2.2.0</li>
            <li>axios: 1.6.7</li>
            <li>classnames: 2.5.1</li>
            <li>lodash: 4.17.21</li>
            <li>react: 18.2.0</li>
            <li>react-dom: 18.2.0</li>
            <li>react-redux: 9.1.0</li>
            <li>react-router-dom: 6.22.0</li>
          </ul>
        </div>
        <div className="col-6">
          <Heading type="h2" label="All Development Dependencies" />
          <ul>
            <li>@csstools/postcss-global-data: 2.1.1</li>
            <li>@storybook/addon-essentials: 7.6.14</li>
            <li>@storybook/addon-interactions: 7.6.14</li>
            <li>@storybook/addon-links: 7.6.14</li>
            <li>@storybook/addon-onboarding: 1.0.11</li>
            <li>@storybook/blocks: 7.6.14</li>
            <li>@storybook/react: 7.6.14</li>
            <li>@storybook/react-vite: 7.6.14</li>
            <li>@storybook/test: 7.6.14</li>
            <li>@svgr/cli: 8.1.0</li>
            <li>@types/react: 18.2.55</li>
            <li>@types/react-dom: 18.2.19</li>
            <li>@typescript-eslint/eslint-plugin: 6.21.0</li>
            <li>@typescript-eslint/parser: 6.21.0</li>
            <li>@vitejs/plugin-react: 4.2.1</li>
            <li>autoprefixer: 10.4.17</li>
            <li>css-loader: 6.10.0</li>
            <li>eslint: 8.56.0</li>
            <li>eslint-plugin-react-hooks: 4.6.0</li>
            <li>eslint-plugin-react-refresh: 0.4.5</li>
            <li>postcss: 8.4.35</li>
            <li>postcss-custom-media: 10.0.2</li>
            <li>postcss-import: 16.0.0</li>
            <li>postcss-nested: 6.0.1</li>
            <li>postcss-preset-env: 9.3.0</li>
            <li>storybook: 7.6.14</li>
            <li>style-loader: 3.3.4</li>
            <li>tailwindcss: 3.4.1</li>
            <li>typescript: 5.2.2</li>
            <li>vite: 5.1.0</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dependencies;

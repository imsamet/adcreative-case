import React from 'react';
import * as Logo from './index.ts';
import { LogoProps } from './_models.ts';

export const Logos: React.FC<LogoProps> = ({ name, className }) => {
  switch (name) {
    case 'AdCreativeLogo':
      return <Logo.AdCreativeLogo className={className} />;
    case 'AdCreativeText':
      return <Logo.AdCreativeText className={className} />;
    case 'AdCreative':
      return <Logo.AdCreative className={className} />;
    default:
      return <>Logo</>;
      break;
  }
};

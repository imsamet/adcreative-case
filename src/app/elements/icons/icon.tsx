import React from 'react';
import * as Icon from './index.ts';
import { IconsProps } from './core/_models.ts';

export const Icons: React.FC<IconsProps> = ({ name, className }) => {
  switch (name) {
    case 'Airplane':
      return <Icon.Airplane className={className} />;
      break;
    case 'CheckCircle':
      return <Icon.CheckCircle className={className} />;
      break;
    case 'Click':
      return <Icon.Click className={className} />;
      break;
    case 'CrossSquare':
      return <Icon.CrossSquare className={className} />;
      break;
    case 'Down':
      return <Icon.Down className={className} />;
      break;
    case 'Figma':
      return <Icon.Figma className={className} />;
      break;
    case 'Github':
      return <Icon.Github className={className} />;
      break;
    case 'Linkedin':
      return <Icon.Linkedin className={className} />;
      break;
    case 'Whatsapp':
      return <Icon.Whatsapp className={className} />;
      break;
    default:
      return <>Icon</>;
      break;
  }
};

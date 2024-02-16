import { IconNames } from '../../icons/core/_models';

export type Props =
  | {
      type: 'button';
      href?: never;
      tabIndex: number;
      label: string;
      icon?: IconNames;
      className?: string;
    }
  | {
      type: 'a';
      href: string;
      tabIndex: number;
      label: string;
      icon?: IconNames;
      className?: string;
    };

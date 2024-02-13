import { IconNames } from '../../../../elements/icons/core/_models';

export type Props = {};
export type SocialLinkType = {
  id: number;
  href: string;
  icon: IconNames;
}[];
export type InfoLinkType = {
  id: number;
  label: string;
  type: 'name' | 'mail' | 'phone';
  href?: string;
}[];

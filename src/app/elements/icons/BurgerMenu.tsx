import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBurgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M16.05 2h-8.1A5.95 5.95 0 0 0 2 7.95v8.1A5.95 5.95 0 0 0 7.95 22h8.1A5.95 5.95 0 0 0 22 16.05v-8.1A5.95 5.95 0 0 0 16.05 2"
      opacity={0.3}
    />
    <path
      fill="currentColor"
      d="M16.7 8.28h-3.36a.75.75 0 1 1 0-1.5h3.36a.75.75 0 0 1 0 1.5M16.7 12.75H8.24a.75.75 0 1 1 0-1.5h8.46a.75.75 0 1 1 0 1.5M16.43 17.22H10.7a.75.75 0 1 1 0-1.5h5.73a.75.75 0 1 1 0 1.5"
    />
  </svg>
);
export default SvgBurgerMenu;

import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="m16.02 1.973-8.14.044A5.96 5.96 0 0 0 1.954 8.01l.044 8.08a5.96 5.96 0 0 0 5.992 5.927l8.14-.044a5.96 5.96 0 0 0 5.927-5.992l-.043-8.08a5.96 5.96 0 0 0-5.992-5.928"
      opacity={0.3}
    />
    <path
      fill="currentColor"
      d="M9.4 19.4a2.4 2.4 0 0 0 2.4-2.4v-2.4H9.4a2.4 2.4 0 0 0 0 4.8M7 12.2a2.4 2.4 0 0 1 2.4-2.4h2.4v4.8H9.4A2.4 2.4 0 0 1 7 12.2"
    />
    <path
      fill="currentColor"
      d="M7 7.4A2.4 2.4 0 0 1 9.4 5h2.4v4.8H9.4A2.4 2.4 0 0 1 7 7.4M11.8 5h2.4a2.4 2.4 0 0 1 0 4.8h-2.4z"
    />
    <path fill="currentColor" d="M16.6 12.2a2.4 2.4 0 1 1-4.802-.002 2.4 2.4 0 0 1 4.802.002" />
  </svg>
);
export default SvgFigma;

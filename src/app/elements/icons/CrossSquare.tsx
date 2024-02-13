import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCrossSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M16.19 2H7.81A5.81 5.81 0 0 0 2 7.81v8.38A5.81 5.81 0 0 0 7.81 22h8.38A5.81 5.81 0 0 0 22 16.19V7.81A5.81 5.81 0 0 0 16.19 2"
      opacity={0.3}
    />
    <path
      fill="currentColor"
      d="m13.41 12 2.83-2.83a1 1 0 1 0-1.41-1.41L12 10.59 9.17 7.76a1 1 0 0 0-1.41 1.41L10.59 12l-2.83 2.83a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0L12 13.41l2.83 2.83a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41z"
    />
  </svg>
);
export default SvgCrossSquare;

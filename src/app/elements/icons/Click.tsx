import type { SVGProps } from 'react';
const SvgClick = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M18.39 13 9.71 4.29a1 1 0 0 0-1.09-.21A1 1 0 0 0 8 5v12.28a1 1 0 0 0 1 1 1 1 0 0 0 .62-.21A17.5 17.5 0 0 1 12 16.53l1.5 3.55a1.48 1.48 0 0 0 1.96.8 1.49 1.49 0 0 0 .8-2l-1.5-3.58a16.5 16.5 0 0 1 3.08-.66 1 1 0 0 0 .83-.66 1 1 0 0 0-.28-.98"
    />
    <path
      fill="currentColor"
      d="M14.14 5.34a.74.74 0 0 1-.66-1.09l1-1.76a.75.75 0 1 1 1.31.72L14.8 5a.75.75 0 0 1-.66.34M17.45 8.57a.75.75 0 0 1-.33-1.42l1.78-.9a.751.751 0 1 1 .68 1.34l-1.79.9a.7.7 0 0 1-.34.08M4.78 10.77h-2a.75.75 0 1 1 0-1.5h2a.75.75 0 0 1 0 1.5M3.27 16.16a.75.75 0 0 1-.33-1.42l1.79-.89a.74.74 0 0 1 1 .35.73.73 0 0 1-.34 1l-1.79.89a.8.8 0 0 1-.33.07"
      opacity={0.3}
    />
  </svg>
);
export default SvgClick;

import type { SVGProps } from 'react';
const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.3}
    />
    <path
      fill="currentColor"
      d="m11.71 15.71 6-6A1.005 1.005 0 0 0 17 7.996a1 1 0 0 0-.71.294L11 13.59l-3.29-3.3a1.004 1.004 0 0 0-1.42 1.42l4 4a1 1 0 0 0 1.42 0"
    />
  </svg>
);
export default SvgCheckCircle;

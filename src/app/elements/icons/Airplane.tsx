import type { SVGProps } from 'react';
const SvgAirplane = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M18.81 2.14 3.5 7.66a2.32 2.32 0 0 0-.32 4.19l4.26 2.34a3.24 3.24 0 0 0 4-.64l10-10.74a2.33 2.33 0 0 0-2.63-.67"
    />
    <path
      fill="currentColor"
      d="m16.41 20.52 5.44-15.25a2.42 2.42 0 0 0-.48-2.46l-10.13 10.9a3.41 3.41 0 0 0-.55 3.81l1.59 3.24a2.24 2.24 0 0 0 4.13-.24"
      opacity={0.3}
    />
  </svg>
);
export default SvgAirplane;

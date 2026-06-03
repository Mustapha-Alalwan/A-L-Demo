/* Inline SVG icons — line icons, no emoji (per build spec §7 NEVER list). */
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
  ...props,
});

export const IconPhone = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

export const IconMail = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="2" y="4" width="20" height="16" rx="1.5" />
    <path d="m3 6 9 7 9-7" />
  </svg>
);

export const IconPin = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const IconClock = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);

/* Pitched roof / house */
export const IconRoof = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 11 12 4l9 7" />
    <path d="M5 10v9h14v-9" />
    <path d="M9 19v-5h6v5" />
  </svg>
);

/* Flat roof / layers */
export const IconLayers = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </svg>
);

/* Tools / repairs */
export const IconWrench = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M14.7 6.3a4 4 0 0 0-5.3 5L4 16.7a2 2 0 0 0 2.8 2.8l5.4-5.4a4 4 0 0 0 5-5.3l-2.5 2.5-2.3-.4-.4-2.3 2.7-2.3Z" />
  </svg>
);

/* Emergency / alert */
export const IconAlert = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M10.3 3.3 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3l-8.5-14.7a2 2 0 0 0-3.4 0Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);

export const IconShield = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconArrow = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

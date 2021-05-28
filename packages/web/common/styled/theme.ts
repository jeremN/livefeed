import { Colors, DynamicObjProps, LineHeights, FontWeights, Breakpoints } from '../../types/index';

export const colors: Colors = {
  black: 'hsla(0, 0%, 0%, 1)',
  white: 'hsla(100, 100%, 100%, 1)',
  merlin: 'hsla(45, 8%, 20%, 1)',
  naturalGrey: 'hsla(48, 2%, 55%, 1)',
  ferra: 'hsla(18, 25%, 33%, 1)',
  orange: 'hsla(30, 89%, 45%, 1)',
  yellow: 'hsla(46, 97%, 44%, 1)',
  green: 'hsla(172, 78%, 27%, 1)',
  blue: 'hsla(198, 87%, 32%, 1)',
  curiousBlue: 'hsla(197, 71%, 52%, 1)',
  purple: 'hsla(264, 44%, 45%, 1)',
  pink: 'hsla(324, 63%, 43%, 1)',
  red: 'hsla(0, 72%, 58%, 1)',
};

export const darkModeColors: Colors = {
  outerSpace: 'hsla(203, 8%, 20%, 1)',
  capeCod: 'hsla(202, 6%, 26%, 1)',
  chicago: 'hsla(40, 3%, 36%, 1)',
  gallery: 'hsla(0, 0%, 92%, 1)', // text color
};

export const fontSizes: DynamicObjProps = {
  title: '3rem',
  h1: '2rem',
  h2: '1.5rem',
  h3: '1.25rem',
  h4: '1rem',
  h5: '0.875rem',
  h6: '0.75rem',
  default: '1rem',
  quotes: '1.25',
  tags: '0.875rem',
};

export const lineHeights: LineHeights = {
  default: 1.5,
  condensed: 1.25,
};

export const fontWeights: FontWeights = {
  thin: 100,
  default: 400,
  bold: 700,
  black: 900,
};

export const breakpoints: Breakpoints = {
  small: {
    syntax: 'sm',
    limit: '600px',
  },
  medium: {
    syntax: 'md',
    limit: '768px',
  },
  large: {
    syntax: 'lg',
    limit: '1024px',
  },
  extraLarge: {
    syntax: 'xl',
    limit: '1280px',
  },
};

export const primaryFont =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

import { Colors, FontSizes, LineHeights, FontWeights, Breakpoints } from '../../types/index';

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

export const fontSizes: FontSizes = {
  title: 48,
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  h5: 14,
  h6: 12,
  default: 16,
  quotes: 20,
  tags: 14,
};

export const lineHeight: LineHeights = {
  default: 1.5,
  condensed: 1.25,
};

export const fontWeights: FontWeights = {
  default: 400,
  bold: 700,
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

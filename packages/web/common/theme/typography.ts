import { IDynamicProps, IFontWeights, ILineHeights } from '../../types';

export const primaryFont =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

export const fontSizes: IDynamicProps = {
  title: '3rem',
  h1: '2rem',
  h2: '1.6rem',
  h3: '1.4rem',
  h4: '1.2rem',
  h5: '1.1rem',
  h6: '1rem',
  paragraph: '1rem',
  quotes: '1.25rem',
  tags: '0.875rem',
  small: '0.75rem',
  default: '1rem',
};

export const lineHeights: ILineHeights = {
  default: 1.5,
  condensed: 1.25,
};

export const fontWeights: IFontWeights = {
  thin: 100,
  normal: 400,
  bold: 700,
  black: 900,
};

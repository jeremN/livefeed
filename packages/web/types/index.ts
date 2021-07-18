export interface IHSLObject {
  h: number;
  s: number;
  l: number;
  a?: number;
}

export type HSLOutput = string | HSLObject;

export interface IStatusTheme {
  warningColor: HSLOutput;
  warningHoverColor: HSLOutput;
  warningActiveColor: HSLOutput;
  errorColor: HSLOutput;
  errorHoverColor: HSLOutput;
  errorActiveColor: HSLOutput;
  successColor: HSLOutput;
  successHoverColor: HSLOutput;
  successActiveColor: HSLOutput;
}
export interface ITheme {
  primaryFont: string;
  textColor: HSLOutput;
  textColorOnPrimary: HSLOutput;
  textColorOnSecondary: HSLOutput;
  primaryColor: HSLOutput;
  primaryHoverColor: HSLOutput;
  primaryActiveColor: HSLOutput;
  secondaryColor: HSLOutput;
  secondaryHoverColor: HSLOutput;
  secondaryActiveColor: HSLOutput;
  disabledColor: HSLOutput;
  status: IStatusTheme;
}
export interface IColors {
  [key: string]: string | HSLOutput;
}

export interface IDynamicProps {
  [key: string]: string;
}

export interface ILineHeights {
  default: number;
  condensed: number;
}

export interface IFontWeights {
  normal: number;
  bold: number;
  black?: number;
  thin?: number;
}

export interface IBreakpointsProps {
  syntax: string;
  limit: string;
}

export interface IBreakpoints {
  [key: string]: IBreakpointsProps;
}

export interface ICustomElementProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

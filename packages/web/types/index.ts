export interface HSLObject {
  h: number;
  s: number;
  l: number;
  a?: number;
}

export type HSLOutput = string | HSLObject;

export interface Colors {
  [key: string]: string | HSLOutput;
}

export interface DynamicObjProps {
  [key: string]: string;
}

export type LineHeights = {
  [key: string]: number;
};

export interface FontWeights {
  default: number;
  bold: number;
  black?: number;
  thin?: number;
}

export interface BreakpointsProps {
  syntax: string;
  limit: string;
}

export interface Breakpoints {
  [key: string]: BreakpointsProps;
}

export interface CustomElementProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

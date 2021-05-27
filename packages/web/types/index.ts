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

export interface FontSizes {
  default: number;
  title: number;
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6?: number;
  quotes?: number;
  tags?: number;
}

export interface LineHeights {
  default: number;
  condensed?: number;
}

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

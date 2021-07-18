import { ITheme } from '../../types';
import { blue, red, yellow, green, neutral } from './colors';
import { primaryFont } from './typography';

export const defaultTheme: ITheme = {
  primaryFont: primaryFont,
  textColor: neutral[700],
  textColorOnPrimary: neutral[700],
  textColorOnSecondary: neutral[700],
  primaryColor: blue[100],
  primaryHoverColor: blue[200],
  primaryActiveColor: blue[300],
  secondaryColor: neutral[500],
  secondaryHoverColor: neutral[700],
  secondaryActiveColor: neutral[800],
  disabledColor: neutral[400],
  status: {
    warningColor: yellow[100],
    warningHoverColor: yellow[200],
    warningActiveColor: yellow[300],
    errorColor: red[100],
    errorHoverColor: red[200],
    errorActiveColor: red[300],
    successColor: green[100],
    successHoverColor: green[200],
    successActiveColor: green[300],
  },
};

export const darkTheme: ITheme = {
  primaryFont: primaryFont,
  textColor: neutral[100],
  textColorOnPrimary: neutral[100],
  textColorOnSecondary: neutral[700],
  primaryColor: blue[100],
  primaryHoverColor: blue[200],
  primaryActiveColor: blue[300],
  secondaryColor: neutral[500],
  secondaryHoverColor: neutral[700],
  secondaryActiveColor: neutral[800],
  disabledColor: neutral[300],
  status: {
    warningColor: yellow[100],
    warningHoverColor: yellow[200],
    warningActiveColor: yellow[300],
    errorColor: red[100],
    errorHoverColor: red[200],
    errorActiveColor: red[300],
    successColor: green[100],
    successHoverColor: green[200],
    successActiveColor: green[300],
  },
};

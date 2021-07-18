import { ThemeProvider } from 'styled-components';

import { defaultTheme, darkTheme } from '../common/theme/theme.ts';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'default',
    toolbar: {
      icon: 'circlehollow',
      items: ['default', 'dark'],
    },
  },
};

const getTheme = themeName => (themeName == 'dark' ? darkTheme : defaultTheme);

const withThemeProvider = (Story, context) => {
  const currentTheme = getTheme(context.globals.theme);

  return (
    <ThemeProvider theme={currentTheme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

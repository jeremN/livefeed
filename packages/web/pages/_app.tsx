import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, darkTheme } from '../common/theme/theme';
import { GlobalStyle } from '../common/theme/globalStyles';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [theme] = useState('default');

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;

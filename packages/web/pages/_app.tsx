import type { AppProps } from 'next/app';
import { Normalize } from '../common/styled/normalize';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Normalize />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;

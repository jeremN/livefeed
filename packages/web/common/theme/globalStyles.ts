import { createGlobalStyle } from 'styled-components';

import { primaryFont } from './typography';
import { Normalize } from './normalize';

export const GlobalStyle = createGlobalStyle`
  ${Normalize}
  html {
    font-size: 16px;
  }
  body {
    font-family: ${primaryFont};
  }
`;

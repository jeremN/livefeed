import styled from 'styled-components';

import { fontSizes } from '../../../common/styled/theme';
import { CustomElementProps } from '../../../types';

const Button = styled.button`
  padding: 8px 12px;
  border-radius: 4px;
  font-size: ${fontSizes.default};

  &.isActive {
    background-color: aliceblue;
  }
`;

export default Button;

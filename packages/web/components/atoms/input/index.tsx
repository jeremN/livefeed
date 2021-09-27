import styled from 'styled-components';

import { neutral } from '../../../common/theme/colors';
import { primaryFont, fontSizes, fontWeights, lineHeights } from '../../../common/theme/typography';

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
  color: ${props => props.theme.textColor};
`;

export const Input = styled.input`
  font-family: ${primaryFont};
  font-size: ${fontSizes.default};
  font-weight: ${fontWeights.normal};
  line-height: ${lineHeights.default};
  padding: 12px;
  border: 1px solid ${neutral[700]};
  border-radius: 4px;
`;

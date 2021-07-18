import styled from 'styled-components';

import { fontSizes, fontWeights } from '../../../common/theme/typography';

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
  color: ${props => props.theme.textColor};
`;

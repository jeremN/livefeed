import * as React from 'react';
import styled from 'styled-components';

import { lineHeights, fontSizes } from '../../../common/styled/theme';
import { CustomElementProps } from '../../../types';

interface HeadingProps extends CustomElementProps {
  tag: string;
  lh?: string;
}

const HeadingTag = ({ tag, children, ...props }: HeadingProps): JSX.Element =>
  React.createElement(tag, { ...props }, children);

const Heading = styled(HeadingTag)(
  ({ tag, lh = 'default' }: HeadingProps) => `
    font-size: ${fontSizes[tag]};
    line-height: ${lineHeights[lh]};
  `
);

export default Heading;

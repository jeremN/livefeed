import * as React from 'react';
import styled from 'styled-components';

import { lineHeights, fontSizes, fontWeights } from '../../../common/theme/typography';
import { ICustomElementProps } from '../../../types';

enum HeadingTags {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}
interface HeadingProps extends ICustomElementProps {
  tag: HeadingTags;
}

const HeadingTag = ({ tag, children, ...props }: HeadingProps): JSX.Element =>
  React.createElement(tag, { ...props }, children);

const Heading = styled(HeadingTag)(
  ({ tag }: HeadingProps) => `
    font-size: ${fontSizes[tag]};
    font-weight: ${fontWeights.bold};
    line-height: ${lineHeights.default};
  `
);

export default Heading;

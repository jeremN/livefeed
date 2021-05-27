import styled from 'styled-components';

type TitleProps = {
  tag: string;
};

const StyledTitle = styled(tag)`
  line-height: 1.5;
`;

export default function Title(props: TitleProps): JSX.Element {
  return <StyledTitle />;
}

import styled from 'styled-components';

import Title from '../../components/atoms/title';
import RichTextEditor from '../../components/organisms/editor';

const EditorDiv = styled.section`
  display: grid;
  grid-template-columns: 1fr 33.3334%;
  width: 100%;
`;

const EditorContentDiv = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export default function Admin(): JSX.Element {
  return (
    <EditorDiv>
      <Title tag={'h1'}>Livefeed text editor</Title>
      <EditorContentDiv>
        <RichTextEditor />
      </EditorContentDiv>
    </EditorDiv>
  );
}

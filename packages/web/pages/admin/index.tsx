import RichTextEditor from '../../components/organisms/editor';

export default function Admin(): JSX.Element {
  return (
    <div className="editor">
      <h1>Livefeed text editor</h1>
      <div className="editor__content">
        <RichTextEditor />
      </div>
    </div>
  );
}

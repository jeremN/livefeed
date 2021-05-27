import * as React from 'react';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function RichTextEditor(): JSX.Element {
  const editor = useEditor({
    extensions: [StarterKit],
    content: 'Type here',
  });

  return <EditorContent editor={editor} />;
}

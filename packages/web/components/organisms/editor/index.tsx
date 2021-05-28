import * as React from 'react';
import styled from 'styled-components';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Editor } from '@tiptap/core';

import Button from '../../atoms/button';

interface EditorMenuBarProps {
  editor: Editor | null;
}

const StyledCodeBlockIcon = styled.svg`
  width: 15px;
  height: 15px;
  display: block;
  fill: inherit;
  flex-shrink: 0;
  backface-visibility: hidden;
`;

const StyledMenuBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

function MenuBar({ editor }: EditorMenuBarProps): JSX.Element | null {
  if (!editor) return null;

  return (
    <StyledMenuBar>
      <Button
        onClick={() => editor?.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'isActive' : ''}
      >
        Bold
      </Button>
      <Button
        onClick={() => editor?.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'isActive' : ''}
      >
        Italic
      </Button>
      <Button
        onClick={() => editor?.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'isActive' : ''}
      >
        Paragraph
      </Button>
      <Button
        onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'isActive' : ''}
      >
        Heading 1
      </Button>
      <Button
        onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'isActive' : ''}
      >
        Heading 2
      </Button>
      <Button
        onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'isActive' : ''}
      >
        Heading 3
      </Button>
      <Button
        onClick={() => editor?.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'isActive' : ''}
      >
        Heading 4
      </Button>
      <Button
        onClick={() => editor?.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'isActive' : ''}
      >
        Heading 5
      </Button>
      <Button
        onClick={() => editor?.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'isActive' : ''}
      >
        Heading 6
      </Button>
      <Button
        onClick={() => editor?.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'isActive' : ''}
      >
        Bulleted list
      </Button>
      <Button
        onClick={() => editor?.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'isActive' : ''}
      >
        Ordered list
      </Button>
      <Button
        onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'isActive' : ''}
      >
        <StyledCodeBlockIcon viewBox="0 0 30 30">
          <path d="M11.625,4L0,15l11.625,11L13,24.563L2.906,15L13,5.438L11.625,4z M18.375,4L17,5.438L27.094,15L17,24.563L18.375,26L30,15L18.375,4z"></path>
        </StyledCodeBlockIcon>
        Code
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'isActive' : ''}
      >
        Quote
      </Button>
    </StyledMenuBar>
  );
}

export default function RichTextEditor(): JSX.Element {
  const editor = useEditor({
    extensions: [StarterKit],
    content: 'Type here',
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

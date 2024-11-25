"use client";
import "./styles.css";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import EditorExtension from "./EditorExtension";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";
import Underline from "@tiptap/extension-underline";

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      StarterKit,
      Underline.configure({
        HTMLAttributes: {
          class: "my-custom-class",
        },
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Placeholder.configure({
        placeholder: "Write somethingasdasd…",
      }),
    ],
    editorProps: {
      attributes: {
        class: "focus:outline-none h-screen p-5",
      },
    },
    immediatelyRender: false,
  });

  return (
    <div>
      <EditorExtension editor={editor} />
      <div className="">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TextEditor;

"use client";
import "./styles.css";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import EditorExtension from "./EditorExtension";

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
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

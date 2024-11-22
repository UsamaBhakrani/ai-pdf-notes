"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const TextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <div>
      <div className="">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TextEditor;

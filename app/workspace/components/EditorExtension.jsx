import {
  BoldIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  ItalicIcon,
  UnderlineIcon,
  CodeIcon,
  LinkIcon,
  StrikethroughIcon,
  BulletListIcon,
} from "lucide-react";

const EditorExtension = ({ editor }) => {
  return (
    editor && (
      <div className="p-5">
        <div className="control-group">
          <div className="flex gap-3 button-group">
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={
                editor.isActive("heading", { level: 1 }) ? "text-blue-500" : ""
              }
            >
              <Heading1Icon />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={
                editor.isActive("heading", { level: 2 }) ? "text-blue-500" : ""
              }
            >
              <Heading2Icon />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              className={
                editor.isActive("heading", { level: 3 }) ? "text-blue-500" : ""
              }
            >
              <Heading3Icon />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor?.isActive("bold") ? "text-blue-500" : ""}
            >
              <BoldIcon />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor?.isActive("italic") ? "text-blue-500" : ""}
            >
              <ItalicIcon />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor?.isActive("underline") ? "text-blue-500" : ""}
            >
              <UnderlineIcon />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCode().run()}
              className={editor?.isActive("code") ? "text-blue-500" : ""}
            >
              <CodeIcon />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default EditorExtension;

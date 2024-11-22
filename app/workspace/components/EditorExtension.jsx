import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

const EditorExtension = ({ editor }) => {
  return (
    <div>
      <div className="control-group">
        <div className="button-group">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            // className={editor.isActive("bold") ? "is-active" : ""}
          >
            Toggle bold
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorExtension;

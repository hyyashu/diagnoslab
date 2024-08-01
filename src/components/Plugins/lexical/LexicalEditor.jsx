import React, { useEffect, useRef } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { HeadingNode } from "@lexical/rich-text";
import ToolbarPlugin from "./ToolbarPlugin";
import CustomOnChangePlugin from "./CustomOnChangePlugin";



const theme = {
  text: {
    bold: "font-bold",
    underline: "underline",
    strikethrough: "line-through",
    underlineStrikethrough: "underline line-through",
    italic: "italic",
  },
};

const onError = (error) => {
  console.error(error);
};

const LexicalEditor = ({ initialContent, value, name, onChange }) => {
  const editorConfig = {
    namespace: "MyEditor",
    theme: theme,
    onError,
    editorState: initialContent ? JSON.parse(initialContent) : null,
    nodes: [HeadingNode],
  };

  return (
    <div className="">
      <LexicalComposer initialConfig={editorConfig}>
        <ToolbarPlugin />
        <div className="relative">
          <RichTextPlugin
            contentEditable={
              <div className="">
                <ContentEditable className="editor border rounded p-2 h-96 w-[80%]" />
              </div>
            }
            placeholder={
              <div className="placeholder absolute top-2 ml-2 w-full ">
                Enter text...
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
        <AutoFocusPlugin />
        <HistoryPlugin />
        <CustomOnChangePlugin value={value} onChange={onChange} />
      </LexicalComposer>
    </div>
  );
};

export default LexicalEditor;

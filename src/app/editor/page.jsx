"use client";
import React, { useState } from "react";
import LexicalEditor from "../../../components/LexicalEditor";

const EditorPage = () => {
  const [content, setContent] = useState("");
  const [savedContent, setSavedContent] = useState("");

  const handleChange = (editorState) => {
    // Convert editor state to HTML (for simplicity)
    setContent(JSON.stringify(editorState));
  };

  const handleSave = () => {
    // Save the content to localStorage for testing
    localStorage.setItem("blogContent", content);
    setSavedContent(content);
  };

  return (
    <div>
      <LexicalEditor initialContent={content} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
      <div>
        <h2>Preview</h2>
        <div
          className="preview-content"
          dangerouslySetInnerHTML={{ __html: savedContent }}
        />
      </div>
    </div>
  );
};

export default EditorPage;

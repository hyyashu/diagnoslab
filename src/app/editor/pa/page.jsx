"use client";
import React, { useEffect, useState } from "react";

const BlogPage = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    // Retrieve the saved content from localStorage for testing
    const savedContent = localStorage.getItem("blogContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  return (
    <div>
      <h1>Blog Post</h1>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default BlogPage;

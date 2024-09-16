"use client";
import React from "react";
import { useParams } from "next/navigation";
// import { blogPosts } from "../../../../constant/constant";
import { timeAgo } from "@/lib/timeUtils";
timeAgo;

const BlogName = () => {
  const params = useParams();
  const slug = params.slug;
  const blogPost = blogPosts.find((post) => post.slug === slug);

  if (!blogPost) {
    return <p>Blog post not found</p>;
  }
  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.author}</p>
      <p>{timeAgo(blogPost.date)}</p>
      <div>
        <p>{blogPost.content}</p>
      </div>
    </div>
  );
};
export default BlogName;

"use client"
import { useEffect, useState } from "react";
import PostPreview from "./PostPreview";
import { getClient, getAllPosts } from "../lib/sanity.client";
import type { Post } from "../lib/sanity.queries";

export default function SanityBlogPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts(getClient()).then((data) => {
      setPosts(data.slice(0, 3));
    });
  }, []);

  if (!posts.length) {
    return <div className="text-gray-400">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostPreview
          key={post._id}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  );
} 
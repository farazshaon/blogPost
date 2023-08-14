"use client";

import Link from "next/link";

import blogData from "../data/blogData.json";

const BlogList = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Blog Posts</h1>
      <ul>
        {blogData.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a className="text-blue-500">{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;

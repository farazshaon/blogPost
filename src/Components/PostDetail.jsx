import React from "react";
import { useRouter } from "next/router";

const PostDetail = ({ posts }) => {
  const router = useRouter();
  const { id } = router.query;

  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="bg-white rounded-md shadow-md p-8 m-4">
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <p className="text-gray-800">{post.content}</p>
    </div>
  );
};

export default PostDetail;

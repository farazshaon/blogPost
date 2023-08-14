import Link from "next/link";
import getPost from "../../../lib/getPost";



const Blog = async () => {

  const posts = await getPost()

  return (
    <div>
      <h1 className="text-black text-3xl font-semibold mb-4">Blog Posts</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <li key={post.id} className="bg-white rounded-md shadow-md p-4">
            <Link className="text-blue-500" href={`/post/${post.id}`} passHref>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

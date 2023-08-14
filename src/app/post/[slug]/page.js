
import getPost from "../../../../lib/getPost";


const Post = async ({ params }) => {
  const posts = await getPost()

  const post = posts?.find((post) => post.id === parseInt(params.slug));


  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className=" bg-white rounded-md shadow-md p-8 m-4">
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-800">{post.body}</p>
    </div>
  );
};

export default Post;

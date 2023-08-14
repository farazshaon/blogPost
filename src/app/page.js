import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-semibold mb-4 text-black">
        Welcome to My Blog
      </h1>
      <Link className="text-green-500" href="/blog">
        Go to Blog
      </Link>
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  let currentPath = usePathname();

  return (
    <nav className=" py-4">
      <div className="flex items-center justify-between px-4 md:px-8 mx-auto">
        <div className="flex items-center">
          <div className="mr-4">
            <Image src="/logo white.png" alt="Image" width={50} height={100} />
          </div>
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link
                className={`${
                  currentPath === "/" ? "text-black  font-bold" : "text-black"
                } hover:text-black transition duration-300`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  currentPath === "/blogs"
                    ? "text-black font-bold"
                    : "text-black"
                } hover:text-black transition duration-300`}
                href="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

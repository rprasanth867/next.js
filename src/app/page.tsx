import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>Welcome to home page</h1>
            <Link className="text-blue-400 hover:text-blue-700" href="/blog">Blog</Link>
            <Link className="text-blue-400 hover:text-blue-700 m-2" href="/products">Products</Link>
            <Link className="text-blue-400 hover:text-blue-700" href="/about">About</Link>
        </>
    )
};

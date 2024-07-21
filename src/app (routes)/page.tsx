import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1 className="font-bold">Home page</h1>
            <div>
                <Link className="block text-blue-400" href="/profile">Profile</Link>
                <Link className="block text-blue-400" href="/users">Users</Link>
            </div>
        </>
    )
}

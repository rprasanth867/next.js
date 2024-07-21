import Link from "next/link";

export default function F4() {
    return (
        <>
            <h1>F4 page</h1>
            <div>
                <Link className="text-blue-400 hover:text-blue-700" href="/f1/f3">F3</Link>
                <Link className="text-blue-400 hover:text-blue-700 m-2" href="/about">About</Link>
            </div>
        </>
    )
}

import Card from "@/components/card";
import Link from "next/link";

export default function Archived() {
    return (
        <Card>
            <h1>Archived Notifications</h1>
            <ul>
                <li>Item1</li>
                <li>Item2</li>
            </ul>
            <Link className="text-blue-400 hover:text-blue-700" href="/complex-dashboard">Default</Link>
        </Card>
    )
}
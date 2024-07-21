import Card from "@/components/card";
import Link from "next/link";


export default function Notifications() {
    return <Card>
        <div>Parellel Route: Notifications</div>
        <Link className="text-blue-400 hover:text-blue-700" href="/complex-dashboard/archived">Archived</Link>
    </Card>
};


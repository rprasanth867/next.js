import LineChart from "./line-chat"

function BarChart() {
    return <h1>Bar Chart</h1>
}

export default function Dashboard() {
    return (
        <div>
            <h1>Welcome to Dashboard</h1>
            <BarChart />
            <LineChart />
        </div>
    )
}
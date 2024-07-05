
export default function Card({
    children
}: {children: React.ReactNode}) {
    return <div className="border border-slate-300 rounded-md p-2">{children}</div>
}

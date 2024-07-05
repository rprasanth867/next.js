
export default function ComplexDashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login
}: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode,
    login: React.ReactNode
}) {
    const isLoggedIn = false;

    return isLoggedIn ? (
        <>
            <div className="m-2">{children}</div>
            <div className="flex gap-3 m-5">
                <div className="w-50 bg-lime-200 p-2">
                    {users}
                    {revenue}
                </div>
                {notifications}
            </div>
        </>
    ) : (
        login
    )
};

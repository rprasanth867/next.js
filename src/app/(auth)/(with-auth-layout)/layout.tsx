"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name: "Forgot Password", href: "/forgot-password"}
]

export default function AuthLayout({
    children
}: {children: React.ReactNode}) {
    const pathname = usePathname();

    return (
        <div>
            <h2>Inner layout</h2>
            {navLinks.map(link => {
                const isActive = pathname.startsWith(link.href);
                return (
                    <Link style={{color: isActive ? "red": "black"}} key={link.href} href={link.href}>{link.name}</Link>
                )
            })}
            {children}
        </div>
    )
}

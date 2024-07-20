import { NextResponse, NextRequest } from "next/server";

// Method1: Custom matcher config
// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//     matcher: "/profile"
// }


// Method2: Conditional statements
// export function middleware(request: NextRequest) {
//     if (request.nextUrl.pathname === "/profile") {
//         return NextResponse.redirect(new URL("/users", request.url));
//     }
// }


export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    const themePreference = request.cookies.get("theme");
    
    if (!themePreference) {
        response.cookies.set("theme", "dark");
    }

    response.headers.set("Custom-header", "custom-value");

    return response;
}

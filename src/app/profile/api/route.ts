import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

    // Access headers from request
    const requestHeader = new Headers(request.headers);
    console.log('++++++++', requestHeader.get("Authorization"));

    // Access headers using hook
    const headerList = headers();
    console.log("++++++++hook", headerList.get("Authorization"));

    // Access cookies from the request
    const theme = request.cookies.get("theme");
    console.log("+++cookie", theme);

    // Access cookies using hook
    const cookieList = cookies();
    console.log('+++++++hook cookie', cookieList.get("theme"))


    // Returning html
    // Setting cookie from the server
    return new Response("<h1>Profile/api route page</h1>", {
        headers: {
            "content-type": "text/html",
            "Set-Cookie": "theme=dark" 
        }
    });
}

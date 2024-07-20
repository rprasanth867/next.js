
export const dynamic = "force-dynamic"; // default -- "auto"

export function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString()
    })
}


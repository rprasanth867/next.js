import { redirect } from "next/navigation";
import { comments } from "../data"

export async function GET(_request: Request, {params}: {params: {id: string}}) {

    // Redirect logic
    if (parseInt(params.id) > comments.length) {
        redirect("/comments")
    }

    const comment = comments.find(d => d.id === parseInt(params.id));

    if (!comment) return Response.error()
    return Response.json(comment)
}

export async function PATCH(
    request: Request,
    {params}: {params: {id: string}}
) {
    const body = await request.json();

    comments.forEach((d, i) => {
        if (d.id === parseInt(params.id)) {
            comments[i].text = body.text
        }
    })

    return new Response(JSON.stringify(comments), {
        headers: {
            "content-type": "application/json"
        },
        status: 201
    })
}

export async function DELETE(
    _request: Request,
    {params}: {params: {id: string}}
) {
    const i = comments.findIndex(d => d.id === parseInt(params.id));
    comments.splice(i, 1);
    return new Response(JSON.stringify(comments), {
        headers: {
            "content-type": "application/json"
        },
        status: 201
    })
}

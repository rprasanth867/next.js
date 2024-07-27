"use client"

import { useEffect } from "react"

export default function UsersError({error}: {error: Error}) {

    useEffect(() => {
        console.error("++++++error", error);
    }, [error])

    return (
        <div className="p-10">
            Users error!
        </div>
    )
}

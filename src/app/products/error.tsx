"use client"
export default function ReviewError({error, reset}: {error: Error, reset: () => void}) {
    return (
        <>
            <h1>Error in products</h1>
            <p>{error.message}</p>
            <button onClick={reset}>Try Again</button>
        </>
    )
}


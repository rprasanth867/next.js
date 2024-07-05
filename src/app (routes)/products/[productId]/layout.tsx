"use client"

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
    children
}: {children: React.ReactNode}) {

    const random = getRandomInt(3);

    if (random === 1) {
        throw new Error("Error loading products");
    }

    return (
        <>
            {children}
            <h2>Features products</h2>
        </>
    )
}

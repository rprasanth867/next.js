import Link from "next/link"

export default function ProductList() {
    const productIds = [1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15];
    return (
        <>
            <Link href="/">Home</Link>
            <h1>Product List</h1>
            {productIds.map(id => (
                <h2 key={id}>
                    <Link href={`/products/${id}`}>Product {id}</Link>
                </h2>
            ))}
        </>
    )
}

"use client";

import { useEffect, useState } from "react";

type Product = {
    id: number;
    title: string;
    price: string;
    description: string;
}

export default function ProductsClient() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const res = await fetch("http://localhost:3001/products");
                if (!res.ok) {
                    throw new Error("Some went wrong");
                }
                const data = await res.json();
                setProducts(data);
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [])

    
    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error occured</h1>
    }

    return (
        <div className="p-10">
            <h1>Products Client</h1>
            <div>
                <ul>
                    {products.map(d => (
                        <li className="mb-10" key={d.id}>
                            <h3>{d.title}</h3>
                            <small>{d.description}</small>
                            <p>{d.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

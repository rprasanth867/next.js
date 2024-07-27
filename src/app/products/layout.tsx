
type Product = {
    id: number;
    title: string;
    price: string;
    description: string;
}

export default async function ProductLayout({
    children
}: {children: React.ReactNode}) {

    const res = await fetch("http://localhost:3001/products");
    const products: Product[] = await res.json();

    console.log('+++++++++products layout', products);

    return (
        <div>
            {children}
        </div>
    )
}

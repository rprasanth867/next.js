

export const fetchCache = "default-cache";

type Product = {
    id: number;
    title: string;
    price: string;
    description: string;
}

export default async function Products() {

    const res = await fetch("http://localhost:3001/products", {
        next: {
            revalidate: 10
        }
    });

    const detailsRes = await fetch("http://localhost:3001/products/1");
    const details: Product = await detailsRes.json();

    const products: Product[] = await res.json();

    console.log('+++++++++products', products, details);

    return (
        <div>
            <div className="p-10">
                <h1 className="font-bold">Products</h1>
                <div>
                    <h3>Details: {details.title} -- {details.price}</h3>
                    <br />
                </div>
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
};
